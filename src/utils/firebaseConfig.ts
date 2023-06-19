// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfZZdnwDKF4khnoWkGiDtt90rVXUR8TEY",
  authDomain: "legashfund-5a20b.firebaseapp.com",
  projectId: "legashfund-5a20b",
  storageBucket: "legashfund-5a20b.appspot.com",
  messagingSenderId: "854202045633",
  appId: "1:854202045633:web:8b7ed21f4e5e517fd7b040",
  measurementId: "G-T9R51RJGBR",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
console.log(firebase, "firebase firebase firebase");

export default firebase;
