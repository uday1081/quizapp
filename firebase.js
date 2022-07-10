// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuMXf-eVbLyUPwGr3nmhKjOreUth4mx1w",
  authDomain: "fir-auth-9c26c.firebaseapp.com",
  projectId: "fir-auth-9c26c",
  storageBucket: "fir-auth-9c26c.appspot.com",
  messagingSenderId: "38275371665",
  appId: "1:38275371665:web:4d6ddb12cc589f33a32530",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const colRef = collection(db, "scores");

// const q = query(
//   colRef,
//   where("email", "==", "gaggenapallyudaykumarreddy@gmail.com"),
//   orderBy("score", "desc")
// );

// onSnapshot(q, (snapshot) => {
//   let scores = [];
//   snapshot.docs.forEach((doc) => {
//     scores.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(scores[0]);
// });

export { auth, colRef };
