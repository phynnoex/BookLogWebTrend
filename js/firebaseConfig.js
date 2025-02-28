import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDs2-eBksIDdQNQnWgHV_j0LHPKPPNvQC4",
    authDomain: "webtrendwebassignment.firebaseapp.com",
    projectId: "webtrendwebassignment",
    storageBucket: "webtrendwebassignment.firebaseapp.com",
    messagingSenderId: "114226384449",
    appId: "1:114226384449:web:8eb2172a903346607800c0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig, app };
