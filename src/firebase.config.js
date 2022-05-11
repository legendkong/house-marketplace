import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4KzJLYdBde3wKBKWt_ulfkPIchfULp80",
  authDomain: "house-marketplace-app-9aad6.firebaseapp.com",
  projectId: "house-marketplace-app-9aad6",
  storageBucket: "house-marketplace-app-9aad6.appspot.com",
  messagingSenderId: "259877800675",
  appId: "1:259877800675:web:78f8c316b7250e834413d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// to use firebase store(database)
export const db = getFirestore()