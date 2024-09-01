// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD2k9_7yltH_pKN43ZRFvATNW27rb99JE",
  authDomain: "dragonnewsauth-a9f5d.firebaseapp.com",
  projectId: "dragonnewsauth-a9f5d",
  storageBucket: "dragonnewsauth-a9f5d.appspot.com",
  messagingSenderId: "216222629074",
  appId: "1:216222629074:web:9e0de2067ad699279a810b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth