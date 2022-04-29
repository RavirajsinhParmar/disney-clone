import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0AGj949UX28vFJcc8R12H1zmXVbL6hP0",
  authDomain: "disney-clone-8f6c0.firebaseapp.com",
  projectId: "disney-clone-8f6c0",
  storageBucket: "disney-clone-8f6c0.appspot.com",
  messagingSenderId: "621197890690",
  appId: "1:621197890690:web:0e6abc836ecd187ec8d09b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage().ref();

export { auth, provider };
export default db;
