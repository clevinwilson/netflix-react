import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAefg1plCGmUybtIlZmFP8K4bCfzKFMW8I",
  authDomain: "netflix-26ffb.firebaseapp.com",
  projectId: "netflix-26ffb",
  storageBucket: "netflix-26ffb.appspot.com",
  messagingSenderId: "975540889666",
  appId: "1:975540889666:web:a73ff4c0057ed77d5c25db",
  measurementId: "G-J1N3BX83LT"
};

export default firebase.initializeApp(firebaseConfig)