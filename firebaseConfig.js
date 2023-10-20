// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSE85R6meCJusfWsXN4SRZicuQSa_IDN0",
  authDomain: "project-8277546033846123029.firebaseapp.com",
  projectId: "project-8277546033846123029",
  storageBucket: "project-8277546033846123029.appspot.com",
  messagingSenderId: "846141424199",
  appId: "1:846141424199:web:28acbb4bc5a2a830886762",
  measurementId: "G-V3Y1MB9GFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);