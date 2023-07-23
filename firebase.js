// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBHIO1_DzDy4As7_hnayg6DC0D4PJjYw",
  authDomain: "netflix-clone-3-cad67.firebaseapp.com",
  projectId: "netflix-clone-3-cad67",
  storageBucket: "netflix-clone-3-cad67.appspot.com",
  messagingSenderId: "171491218748",
  appId: "1:171491218748:web:79236fc135cf9e607a7a39",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
