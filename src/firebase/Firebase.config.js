import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAjLtccHdUMzGnIBOPDyHFDcN7Ilc-GHY",
  authDomain: "dragon-news-by-obidy.firebaseapp.com",
  projectId: "dragon-news-by-obidy",
  storageBucket: "dragon-news-by-obidy.firebasestorage.app",
  messagingSenderId: "133629619679",
  appId: "1:133629619679:web:73d9ec6b14ea5145bea86a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
