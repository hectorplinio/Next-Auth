// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgy2smvV4NW9h5_3J7wzbysIJnTnYqRJk",
  authDomain: "nextauth-12c1d.firebaseapp.com",
  projectId: "nextauth-12c1d",
  storageBucket: "nextauth-12c1d.appspot.com",
  messagingSenderId: "105963770418",
  appId: "1:105963770418:web:e4690a72842ed8bc6a222b",
  measurementId: "G-3HH3DJTCXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);