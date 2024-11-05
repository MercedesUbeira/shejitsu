// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7A_ScEKHmqtJcxloDCxytZgXaC1cHpZk",
  authDomain: "shejitsu-f75f2.firebaseapp.com",
  projectId: "shejitsu-f75f2",
  storageBucket: "shejitsu-f75f2.appspot.com", 
  messagingSenderId: "441912519095",
  appId: "1:441912519095:web:463dba632ae04e1fe96032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { app, storage };
