import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKsSXMcdsHXc4PQtdnMgUbLm6nacieqYM",
  authDomain: "fir-8a619.firebaseapp.com",
  projectId: "fir-8a619",
  storageBucket: "fir-8a619.appspot.com",
  messagingSenderId: "818782287609",
  appId: "1:818782287609:web:bc4e358a351bfaad1f9428",
  measurementId: "G-5SC12ZMX4Q",
});

const auth = firebase.auth();

export { auth, firestore };
