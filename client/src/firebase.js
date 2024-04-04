// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //api key moved to .env file and imported here because it cannot be revealed to public
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-shop-bb8e3.firebaseapp.com",
  projectId: "mern-shop-bb8e3",
  storageBucket: "mern-shop-bb8e3.appspot.com",
  messagingSenderId: "485173378750",
  appId: "1:485173378750:web:fb166dd68826b0a331e8ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);