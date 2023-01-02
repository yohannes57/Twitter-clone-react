// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD54fA83QpmcmgowbwhbUHvC2qqmatU05k",
  authDomain: "twitter-clone-dfa00.firebaseapp.com",
  projectId: "twitter-clone-dfa00",
  storageBucket: "twitter-clone-dfa00.appspot.com",
  messagingSenderId: "561593151756",
  appId: "1:561593151756:web:b55d717e7a7f5b62531929",
  measurementId: "G-HEHJYFQHFB",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export const auth = firebase.auth();
export default db;
