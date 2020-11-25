import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAYM1KKB-qU8GK2G8KD3orZyTNHPYwZpJY",
    authDomain: "evernote-clone-15f5a.firebaseapp.com",
    databaseURL: "https://evernote-clone-15f5a.firebaseio.com",
    projectId: "evernote-clone-15f5a",
    storageBucket: "evernote-clone-15f5a.appspot.com",
    messagingSenderId: "467442606003",
    appId: "1:467442606003:web:245e70aa89ab178b6875c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);