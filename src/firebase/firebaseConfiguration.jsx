// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEjHz_ijD024ZOX8QdbM8DCvtaUgM7H7g",
  authDomain: "maria-turzynska-portfolio-2023.firebaseapp.com",
  databaseURL: "https://maria-turzynska-portfolio-2023-default-rtdb.firebaseio.com",
  projectId: "maria-turzynska-portfolio-2023",
  storageBucket: "maria-turzynska-portfolio-2023.appspot.com",
  messagingSenderId: "13985880996",
  appId: "1:13985880996:web:569e587ecce4443470bf31",
  measurementId: "G-CJ1KQS9SH0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)