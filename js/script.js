// Main script file for the book management system

import {  getDocs, collection, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";


import { db } from "./firebaseConfig.js";

// Initialize Firebase


const books = [];

// Fetch all books from Firestore
async function getAllBooks() {
    const querySnapshot = await getDocs(collection(db, "bookLog"));
    books.length = 0; // Clear previous entries
    querySnapshot.forEach((doc) => {
        books.push({ id: doc.id, ...doc.data() });
    });
}

getAllBooks().then(() => {
    uniqueCategory = [...new Set(books.map(book => book.author))];
    displayBooks(currentSort, uniqueCategory);
});

// Selectors
const bookForm = document.getElementById("bookForm");
const booksDiv = document.getElementById("books");

// Display books
function displayBooks(SortCategory, uniqueCategoryArray) {
    booksDiv.innerHTML = "";
    uniqueCategoryArray.forEach((category) => {
        const bookCategoryCard = document.createElement("div");
        bookCategoryCard.classList.add("bookCategoryCard");
        bookCategoryCard.innerHTML = `<h3 class="categoryHeader">${category}</h3> <hr class="categoryLine">`;
        const bookCategorySections = document.createElement("div");
        bookCategorySections.classList.add("bookCategorySections");
        bookCategoryCard.appendChild(bookCategorySections);
        booksDiv.appendChild(bookCategoryCard);
        
        let categoryBooks = books.filter(book => book[SortCategory] === category);
        categoryBooks.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("bookCard");
            bookCard.innerHTML = `
                <h3 class="book-title">${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>` + 
                `<p>Rating: ${
                    Array.from({ length: 5 }, (_, i) => {
                        return i < book.rating ? "⭐" : "☆";
                    }).join("")
                }</p>`
                + 
                `<div class="bookCardButtons">
                <button class="deleteBook" data-id="${book.id}">❌</button>
                <button class="editBook" data-id="${book.id}">Edit</button>
                </div>
                
            `;
            bookCategorySections.appendChild(bookCard);
        });
    });

    attachDeleteEvents();
    attachEditEvents();
}

// Attach delete events
function attachDeleteEvents() {
    document.querySelectorAll(".deleteBook").forEach(button => {
        button.addEventListener("click", async (e) => {
            const bookId = e.target.dataset.id;
            await deleteBook(bookId);
        });
    });
}

// Attach edit events
function attachEditEvents() {
    document.querySelectorAll(".editBook").forEach(button => {
        button.addEventListener("click", (e) => {
            const bookId = e.target.dataset.id;
            editBook(bookId);
        });
    });
}

// Delete a book
async function deleteBook(id) {
    await deleteDoc(doc(db, "bookLog", id));
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        displayBooks(currentSort, uniqueCategory);
    }
}

// Add a new book
async function addBook(title, author, genre, rating) {
    const docRef = await addDoc(collection(db, "bookLog"), { title, author, genre, rating });
    books.push({ id: docRef.id, title, author, genre, rating });
    displayBooks(currentSort, uniqueCategory);
}

// Handle form submission for adding books
bookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const rating = document.getElementById("rating").value;

    await addBook(title, author, genre, rating);
    displayBooks(currentSort, uniqueCategory);
});

// Edit book functionality
const editBookDiv = document.getElementById("editBook");

function editBook(id) {
    editBookDiv.style.display = "block";
    const book = books.find(book => book.id === id);
    document.getElementById("editTitle").value = book.title;
    document.getElementById("editAuthor").value = book.author;
    document.getElementById("editGenre").value = book.genre;
    document.getElementById("editRating").value = book.rating;
    document.getElementById("updateBook").dataset.id = book.id;
}

// Handle form submission for editing books
const editBookForm = document.getElementById("editBookForm");

editBookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("editTitle").value;
    const author = document.getElementById("editAuthor").value;
    const genre = document.getElementById("editGenre").value;
    const rating = document.getElementById("editRating").value;
    const id = document.getElementById("updateBook").dataset.id; // Keep ID as a string

    const bookRef = doc(db, "bookLog", id);
    await updateDoc(bookRef, { title, author, genre, rating });

    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { id, title, author, genre, rating };
        editBookDiv.style.display = "none";
        displayBooks(currentSort, uniqueCategory);
    }
});

// Sorting books
let currentSort = "author";
let uniqueCategory = [...new Set(books.map(book => book.author))];

// Sort by author
const authorSort = document.getElementById("authorSort");
authorSort.addEventListener("click", () => {
    uniqueCategory = [...new Set(books.map(book => book.author))];
    currentSort = "author";
    displayBooks(currentSort, uniqueCategory);
});

// Sort by genre
const titleSort = document.getElementById("titleSort");
titleSort.addEventListener("click", () => {
    uniqueCategory = [...new Set(books.map(book => book.genre))];
    currentSort = "genre";
    displayBooks(currentSort, uniqueCategory);
});

export {books, addBook, currentSort, uniqueCategory, displayBooks}
