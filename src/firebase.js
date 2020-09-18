import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa3x3dxnNatO1MTxnPX1hmcluQZdZD2EQ",
  authDomain: "clone-1304f.firebaseapp.com",
  databaseURL: "https://clone-1304f.firebaseio.com",
  projectId: "clone-1304f",
  storageBucket: "clone-1304f.appspot.com",
  messagingSenderId: "929717829233",
  appId: "1:929717829233:web:decef2b4d9a7357c01a5d0",
  measurementId: "G-SEHJDNBZWK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
