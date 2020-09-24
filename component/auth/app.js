
import "firebase/auth";
import firebase from 'firebase/app';
import "firebase/firestore";


  const config = {
    apiKey: "AIzaSyC3DnZDLRFWD71HbhfO5aE0YkGiQE2sW5s",
    authDomain: "befit2020app.firebaseapp.com",
    databaseURL: "https://befit2020app.firebaseio.com",
    projectId: "befit2020app",
    storageBucket: "befit2020app.appspot.com",
    messagingSenderId: "1056900165829",
    appId: "1:1056900165829:web:7d75f949b5ac8db10a80ac"
  };

  

  const app = firebase.initializeApp(config);
  export default app;