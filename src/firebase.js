import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp4uioQvpDKUnyCAz23RBZZy7h0Cw1Lnc",
  authDomain: "clone-19a30.firebaseapp.com",
  databaseURL: "https://clone-19a30.firebaseio.com",
  projectId: "clone-19a30",
  storageBucket: "clone-19a30.appspot.com",
  messagingSenderId: "693032235284",
  appId: "1:693032235284:web:ce3f3820709cf7533a1201",
  measurementId: "G-NCGDXE5NKX"
});

const auth = firebase.auth();

export { auth };