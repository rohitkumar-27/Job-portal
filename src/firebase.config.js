// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLPXnPcK9_ihxq1jDgmXGYT5dMcXwm-g",
  authDomain: "job-portal-50a81.firebaseapp.com",
  projectId: "job-portal-50a81",
  storageBucket: "job-portal-50a81.firebasestorage.app",
  messagingSenderId: "958288515279",
  appId: "1:958288515279:web:2a8e8682003ad7e2cce7ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};