import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3IFD3wsTQV2raOIgwKPhaKwRKyWd92ns",
  authDomain: "linkedin-clone-1b619.firebaseapp.com",
  projectId: "linkedin-clone-1b619",
  storageBucket: "linkedin-clone-1b619.appspot.com",
  messagingSenderId: "840574668832",
  appId: "1:840574668832:web:cdbd7a402b82846a546c45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
