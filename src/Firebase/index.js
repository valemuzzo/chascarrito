import firebase from 'firebase/app';
import  '@firebase/firestore';

  const app = firebase.initializeApp({
    apiKey: "AIzaSyAU2bLfhpmwg4-ljt-Dg9qo2Hjfm3xG0lE",
    authDomain: "chascarrito-3de3c.firebaseapp.com",
    projectId: "chascarrito-3de3c",
    storageBucket: "chascarrito-3de3c.appspot.com",
    messagingSenderId: "172746011372",
    appId: "1:172746011372:web:f2d72f8e75de8ffc76ebc9",
    measurementId: "G-5HM11YN9HM"
  });

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }
