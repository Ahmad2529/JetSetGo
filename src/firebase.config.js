// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCvbcnei0rMoN6UUBGo-i7gX0BjnOru7lY",
  authDomain: "jetsetgo-7b33d.firebaseapp.com",
  projectId: "jetsetgo-7b33d",
  storageBucket: "jetsetgo-7b33d.appspot.com",
  messagingSenderId: "244595604081",
  appId: "1:244595604081:web:bb6dbcc93a69bd0ccab9d0",
  measurementId: "G-V37TDSZ056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);