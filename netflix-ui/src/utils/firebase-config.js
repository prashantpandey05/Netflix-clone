import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz7xezmJKX6tDKXAwYmOoK7NSRePmszl4",
  authDomain: "netflix-clone-e742b.firebaseapp.com",
  projectId: "netflix-clone-e742b",
  storageBucket: "netflix-clone-e742b.appspot.com",
  messagingSenderId: "208931888284",
  appId: "1:208931888284:web:7668ee4b1a3acc9442a159",
  measurementId: "G-F6V72GJ5G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);

