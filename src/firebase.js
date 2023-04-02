// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBGTRQSIB-xYwXq0AHyziaZ7qm56DV8zD0",
  authDomain: "straya2.firebaseapp.com",
  databaseURL: "https://straya2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "straya2",
  storageBucket: "straya2.appspot.com",
  messagingSenderId: "641636998907",
  appId: "1:641636998907:web:00097732d9e4ab28c6da5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
