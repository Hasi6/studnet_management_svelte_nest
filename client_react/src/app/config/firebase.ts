import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXdYGZBpNQcXoajDbtt-NELGZ2pOgKDPI",
  authDomain: "whats-app-clone-rn.firebaseapp.com",
  databaseURL: "https://whats-app-clone-rn.firebaseio.com",
  projectId: "whats-app-clone-rn",
  storageBucket: "whats-app-clone-rn.appspot.com",
  messagingSenderId: "286455794420",
  appId: "1:286455794420:web:100f5c14ad1eef348f2ca1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const storage = firebase.storage;
