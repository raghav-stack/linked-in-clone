import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGWKoxXgiuv0v2fyxcwM9Pj0w-RikakSA",
    authDomain: "linkedin-clone-yt-4e7f7.firebaseapp.com",
    projectId: "linkedin-clone-yt-4e7f7",
    storageBucket: "linkedin-clone-yt-4e7f7.appspot.com",
    messagingSenderId: "130891414148",
    appId: "1:130891414148:web:e3f3d1323e9b0bd56060d1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export  {db, auth};