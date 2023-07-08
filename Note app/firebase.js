// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Oej9i-OYRs3X4PMmA9Azw20RfzLJ7w4",
  authDomain: "notes-app-7f11d.firebaseapp.com",
  projectId: "notes-app-7f11d",
  storageBucket: "notes-app-7f11d.appspot.com",
  messagingSenderId: "534766516972",
  appId: "1:534766516972:web:bf2d43b453bbb5e17b43c9",
  measurementId: "G-3CQMGCQ8MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);