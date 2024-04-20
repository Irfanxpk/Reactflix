// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv0k9DOelk9ETpzWLmcRxNOo7qWX_wgG8",
  authDomain: "netflix-9d5c6.firebaseapp.com",
  projectId: "netflix-9d5c6",
  storageBucket: "netflix-9d5c6.appspot.com",
  messagingSenderId: "379313733437",
  appId: "1:379313733437:web:40cb65b4d92874cf8acf54",
  measurementId: "G-H75L2QFW59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()