// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b7647.firebaseapp.com",
  projectId: "mern-blog-b7647",
  storageBucket: "mern-blog-b7647.appspot.com",
  messagingSenderId: "166555661918",
  appId: "1:166555661918:web:4e20084599279a86a4e6cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
