import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASiGfGk-C2YGN_9FLUfe6Dz8KSUFmwd_I",
  authDomain: "market-3ebe7.firebaseapp.com",
  projectId: "market-3ebe7",
  storageBucket: "market-3ebe7.firebasestorage.app",
  messagingSenderId: "271364829847",
  appId: "1:271364829847:web:9a7ed0eeac5f8b5638afd2",
};

const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth();
