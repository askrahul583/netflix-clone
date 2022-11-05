import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN7LD2PgZ2cxuNTeQUDEDGhAx4rXynQvM",
  authDomain: "netflix-clone-97e37.firebaseapp.com",
  projectId: "netflix-clone-97e37",
  storageBucket: "netflix-clone-97e37.appspot.com",
  messagingSenderId: "651349402257",
  appId: "1:651349402257:web:ab0f61f7bc185d77709530",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
