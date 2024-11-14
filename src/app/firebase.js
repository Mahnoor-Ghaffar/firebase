import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBTKDAa5LMlBAYGmJh198zSz48Pr5WZyFM",
    authDomain: "bakery-website-7c079.firebaseapp.com",
    projectId: "bakery-website-7c079",
    storageBucket: "bakery-website-7c079.firebasestorage.app",
    messagingSenderId: "207115382416",
    appId: "1:207115382416:web:54165a666999915b0f7215",
    measurementId: "G-EL4Q3N58QY",
    databaseURL: "https://bakery-website-7c079-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);