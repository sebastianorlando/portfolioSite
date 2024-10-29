import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlBdhXTqY2yjR_ZuZ7Kycv8-kLzWP9sP4",
  authDomain: "portfolio-3aba9.firebaseapp.com",
  projectId: "portfolio-3aba9",
  storageBucket: "portfolio-3aba9.appspot.com",
  messagingSenderId: "189144143467",
  appId: "1:189144143467:web:a41b1296c175019431032e",
  measurementId: "G-NS986L8VP7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);