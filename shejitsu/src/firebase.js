// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7A_ScEKHmqtJcxloDCxytZgXaC1cHpZk",
  authDomain: "shejitsu-f75f2.firebaseapp.com",
  databaseURL: "https://shejitsu-f75f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shejitsu-f75f2",
  storageBucket: "shejitsu-f75f2.firebasestorage.app",
  messagingSenderId: "441912519095",
  appId: "1:441912519095:web:463dba632ae04e1fe96032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firestore
const db = getFirestore(app); // Add this line to initialize Firestore

export { app, storage, db }; // Export Firestore instance as 'db'
