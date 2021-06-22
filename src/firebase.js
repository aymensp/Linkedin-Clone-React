import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBgkUHBT1zUrCPEubKziuKDSDlUyZjiluc",
  authDomain: "linkedin-clone-8a748.firebaseapp.com",
  projectId: "linkedin-clone-8a748",
  storageBucket: "linkedin-clone-8a748.appspot.com",
  messagingSenderId: "886336021494",
  appId: "1:886336021494:web:9f5c7daacd153160d55dd7",
  measurementId: "G-6ZDG8XG209"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };