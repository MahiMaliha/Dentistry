// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2LSEw9pY3GOnAMB-EHgcBm7-8froJszM",
    authDomain: "dentistry-66607.firebaseapp.com",
    projectId: "dentistry-66607",
    storageBucket: "dentistry-66607.appspot.com",
    messagingSenderId: "378266569567",
    appId: "1:378266569567:web:743ad079223b70a972c4ea" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;