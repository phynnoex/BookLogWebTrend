import { db } from "../js/firebaseConfig.js"; // Import the Firestore database instance
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addBook, displayBooks, currentSort, uniqueCategory, updateFeedback } from "./script.js";

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

var apiKey;
var genAI;
var model;

async function getApiKey() {
  try {
    let snapshot = await getDoc(doc(db, "apiKey", "googlegenai"));
    apiKey = snapshot.data().key;
    console.log("API Key:", apiKey);
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  } catch (error) {
    console.error("Error getting API key:", error);
    appendMessage("Failed to initialize AI.");
  }
}

// Function to append messages to chat history
// Function to append both prompts and responses to chat history
function appendMessage(message, isUser = false) {
    let history = document.createElement("div");
    history.textContent = message;
    history.className = isUser ? "user-history" : "ai-history";
    chatHistory.appendChild(history);
    aiInput.value = "";
  }
  
  // Rule checking for predefined requests like adding tasks
  function ruleChatBot(request) {
     if (request.startsWith("add book")) {
      // Remove the "add book" part from the request
      let bookDetails = request.replace("add book", "").trim();
  
      if (bookDetails) {
        let details = bookDetails.split(",").map((detail) => detail.trim());
  
        // Ensure there are exactly 4 parts (title, author, genre, rating)
        if (details.length === 4) {
          let title = details[0];
          let author = details[1];
          let genre = details[2];
          let rating = details[3];
  
          // Now you have the title, author, genre, and rating
          addBook(title, author, genre, rating)
            .then(() => {
              console.log("Book added successfully");
              appendMessage(`Book added! Title: ${title}, Author: ${author}, Genre: ${genre}, Rating: ${rating}`);
              updateFeedback("Book added successfully", "success"); // Update feedback
            })
            .catch((error) => {
              console.error("Error adding book:", error);
            });
        } else {
          appendMessage(
            "Please follow the format: 'add book title, author, genre, rating'"
          );
        }
  
        displayBooks(currentSort, uniqueCategory);
      } else {
        // If no details, prompt user with the template
        appendMessage(
          "Use this template to add a book: 'add book title, author, genre, rating'"
        );
      }
      return true;
    }
  
    // Additional rules can be added as per requirement
    return false;
  }
  
  // Asynchronously request chatbot response
  async function askChatBot(request) {
    let result = await model.generateContent(request);
    appendMessage(result.response.text());
  }
  
  // Event listeners for interaction
  aiButton.addEventListener("click", async () => {
    let prompt = aiInput.value.trim().toLowerCase();
    if (prompt) {
      appendMessage(prompt, true);  // Adding user message
      if (!ruleChatBot(prompt)) {
        await askChatBot(prompt);
      }
    } else {
      appendMessage("Please enter a prompt", true);  // Adding user message
    }
  });
  
  aiInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      aiButton.click();
    }
  });
  
  // Window load event to initialize the model
  window.addEventListener("load", async () => {
    await getApiKey();
  });
  