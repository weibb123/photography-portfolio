import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGyI6s-jjcdCb35V-0aquEKm5GAHwhPSw",
  authDomain: "photography-68e8c.firebaseapp.com",
  projectId: "photography-68e8c",
  storageBucket: "photography-68e8c.appspot.com",
  messagingSenderId: "868422916524",
  appId: "1:868422916524:web:8a7bbe7fdd71d3c5434209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);