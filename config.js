import firebase from 'firebase'

require('@firebase/firestore')
 
var firebaseConfig = {
    apiKey: "AIzaSyD5vSU-yUy2CKSoKlbnq6f3mL3TlKH6ujI",
    authDomain: "bartersystem-5c02f.firebaseapp.com",
    databaseURL: "https://bartersystem-5c02f.firebaseio.com",
    projectId: "bartersystem-5c02f",
    storageBucket: "bartersystem-5c02f.appspot.com",
    messagingSenderId: "230613721902",
    appId: "1:230613721902:web:eca9299e92d45a632410bf"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
