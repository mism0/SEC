import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use

// import {...} from "firebase/database";
// 
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDl3KwVsahh5R9719UP-NWvy5zi34kVxkY",
    authDomain: "smart-e-commerce-app.firebaseapp.com",
    projectId: "smart-e-commerce-app",
    storageBucket: "smart-e-commerce-app.firebasestorage.app",
    messagingSenderId: "360596518138",
    appId: "1:360596518138:web:7196a36ee028b3312e0543"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
