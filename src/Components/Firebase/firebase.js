import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrbyivmV9AZdOE4ZGCF7GiwUB9FXNQZl4",
  authDomain: "network2day-442d9.firebaseapp.com",
  projectId: "network2day-442d9",
  storageBucket: "network2day-442d9.appspot.com",
  messagingSenderId: "720433757014",
  appId: "1:720433757014:web:bf3c520c0aae3a971a34f7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
