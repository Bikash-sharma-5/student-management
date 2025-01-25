// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8-tHHYdCWlBe4rsm50zHoc63dxxHYwfM",
  authDomain: "chat-add2a.firebaseapp.com",
  projectId: "chat-add2a",
  databaseURL: "https://chat-add2a-default-rtdb.firebaseio.com/",
  storageBucket: "chat-add2a.firebasestorage.app",
  messagingSenderId: "719206736436",
  appId: "1:719206736436:web:e3e5adaef3546be8902061",
  measurementId: "G-6PQG7SQQDV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, onValue, set, push, remove };

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;