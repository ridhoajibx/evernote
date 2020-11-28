import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5GseS98tGSQMNFLvuXZxmEaujx47kRiM",
    authDomain: "evernote-clone-cb4ef.firebaseapp.com",
    databaseURL: "https://evernote-clone-cb4ef.firebaseio.com",
    projectId: "evernote-clone-cb4ef",
    storageBucket: "evernote-clone-cb4ef.appspot.com",
    messagingSenderId: "966578676710",
    appId: "1:966578676710:web:0612b1664f3a3ed1d62c27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;