import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARk2UJOfJG2bunlHe0FwKw9Fmjm-MPVpA",
  authDomain: "blog-e4e02.firebaseapp.com",
  projectId: "blog-e4e02",
  storageBucket: "blog-e4e02.appspot.com",
  messagingSenderId: "399769966649",
  appId: "1:399769966649:web:c664d42d19fdef6d6395e8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);