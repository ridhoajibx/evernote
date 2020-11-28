import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEbLTJh06YydL_XV_cYq1kxhDl6WLGaDw",
    authDomain: "evernote-clone-18ba0.firebaseapp.com",
    databaseURL: "https://evernote-clone-18ba0.firebaseio.com",
    projectId: "evernote-clone-18ba0",
    storageBucket: "evernote-clone-18ba0.appspot.com",
    messagingSenderId: "533272443830",
    appId: "1:533272443830:web:de06f2078cfbf5a0e3df17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;