import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1F-FCTa9cuhrhcTgeLkQCZVcjostAL_g",
  authDomain: "twitter-clone-by-hasi.firebaseapp.com",
  databaseURL: "https://twitter-clone-by-hasi.firebaseio.com",
  projectId: "twitter-clone-by-hasi",
  storageBucket: "twitter-clone-by-hasi.appspot.com",
  messagingSenderId: "857954183370",
  appId: "1:857954183370:web:68c70d074501f0bf8eac33"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const storage = firebase.storage;
