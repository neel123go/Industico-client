// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-cldEDK91qTKvTdEBmFNvJGJwk6W0GmE",
    authDomain: "industico.firebaseapp.com",
    projectId: "industico",
    storageBucket: "industico.appspot.com",
    messagingSenderId: "160246909770",
    appId: "1:160246909770:web:f50dc8f7f1915cfb450fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;