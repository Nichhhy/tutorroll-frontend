// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmP-32Yk1z89TCaKaIEF2jsUA9VjpdbmY",
  authDomain: "tutorroll.firebaseapp.com",
  projectId: "tutorroll",
  storageBucket: "tutorroll.appspot.com",
  messagingSenderId: "965775458591",
  appId: "1:965775458591:web:4c0961c72aeaf2ebfeb02a",
  measurementId: "G-Q07SL55CK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
