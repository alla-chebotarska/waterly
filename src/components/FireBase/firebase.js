import app from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCGrXCXvco4SHt1GRP1InlRfGPR7mdXfdQ",
    authDomain: "waterly-5f5de.firebaseapp.com",
    projectId: "waterly-5f5de",
    storageBucket: "waterly-5f5de.appspot.com",
    messagingSenderId: "1084749113724",
    appId: "1:1084749113724:web:2a42c9545ce73404d2dcf9",
    measurementId: "G-JMMCZ5M36G"
  };

  class Firebase {
      constructor(){
          app.initializeApp(firebaseConfig);
      }
  }

  export default Firebase;