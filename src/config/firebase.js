// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBMLMYVek0wObdcMeWPntM8q4SWk1vTJWM",
  authDomain: "task-management-986cb.firebaseapp.com",
  projectId: "task-management-986cb",
  storageBucket: "task-management-986cb.firebasestorage.app",
  messagingSenderId: "435549855466",
  appId: "1:435549855466:web:634f31eebf2837ab990193",
  measurementId: "G-V5FDTLX204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth
