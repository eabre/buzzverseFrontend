import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhK6m4sEf0EZMWXhTsKxEZwAH3eXJD_uM",
  authDomain: "buzzverse-99c91.firebaseapp.com",
  projectId: "buzzverse-99c91",
  storageBucket: "buzzverse-99c91.appspot.com",
  messagingSenderId: "477884519550",
  appId: "1:477884519550:web:9ca32881d47e86cffcb42f",
  measurementId: "G-SSG7K4J3M2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { storage, auth };
