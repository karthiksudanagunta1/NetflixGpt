// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYOy4MMDyH-8l2odhcqtY9ZgxfsuRxS-I",
  authDomain: "netflixgpt-6636e.firebaseapp.com",
  projectId: "netflixgpt-6636e",
  storageBucket: "netflixgpt-6636e.firebasestorage.app",
  messagingSenderId: "801939527386",
  appId: "1:801939527386:web:8583ab3780372a038bf7e3",
  measurementId: "G-FDBMGRY5KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export  const auth = getAuth();