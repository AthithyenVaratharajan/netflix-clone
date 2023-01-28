import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlg0Lc_4QGq5QmklQk66kPvI7uTDZPx0M",
  authDomain: "netflix-clone-a99e7.firebaseapp.com",
  projectId: "netflix-clone-a99e7",
  storageBucket: "netflix-clone-a99e7.appspot.com",
  messagingSenderId: "822820016339",
  appId: "1:822820016339:web:760d7780328adab519c426"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth }
export default db;
