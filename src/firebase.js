import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOTzQ6vf_LYFSgKCx3liGZ8qH5z34hkEA",
  authDomain: "fir-chat-88b3f.firebaseapp.com",
  projectId: "fir-chat-88b3f",
  storageBucket: "fir-chat-88b3f.appspot.com",
  messagingSenderId: "942589827814",
  appId: "1:942589827814:web:2355a39a7f536c35d9f927",
  measurementId: "G-T4YF80J4C2"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}