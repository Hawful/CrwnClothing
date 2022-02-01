import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOMpRiQnc8FcSIzdNDVleDgdivztncoN0",
  authDomain: "crwn-db-8827f.firebaseapp.com",
  projectId: "crwn-db-8827f",
  storageBucket: "crwn-db-8827f.appspot.com",
  messagingSenderId: "927005096533",
  appId: "1:927005096533:web:b50bb50fee7bfb1397f2dc",
  measurementId: "G-DDJ85YHNLT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;