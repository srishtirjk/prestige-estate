// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prestige-estate.firebaseapp.com",
  projectId: "prestige-estate",
  storageBucket: "prestige-estate.appspot.com",
  messagingSenderId: "809963964499",
  appId: "1:809963964499:web:4b3a33aaecaeed4abc1ea6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);