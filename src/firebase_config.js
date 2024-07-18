import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  firebase_api_key,
  firebase_app_id,
  firebase_auth_domain,
  firebase_messaging_sender_id,
  firebase_project_id,
  firebase_storage_bucket,
} from "./config/config";
const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain: firebase_auth_domain,
  projectId: firebase_project_id,
  storageBucket: firebase_storage_bucket,
  messagingSenderId: firebase_messaging_sender_id,
  appId: firebase_app_id,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
