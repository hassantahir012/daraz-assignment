import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDz7xkMsbZ765w6EhttHWExelieABWvbLQ",
  authDomain: "daraz-2c7ad.firebaseapp.com",
  projectId: "daraz-2c7ad",
  storageBucket: "daraz-2c7ad.appspot.com",
  messagingSenderId: "361318240942",
  appId: "1:361318240942:web:da0e3f9751be1b3d3b133f",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
