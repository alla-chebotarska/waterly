import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

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
          firebase.initializeApp(firebaseConfig);
          this.auth = firebase.auth();
      }

      signInWithGoogle() {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            //var credential = result.credential;
        
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
          }).catch((error) => {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // // ...
          });        
      }

      signOutWithGoogle() {
        this.auth.signOut().then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }
  }

  export default Firebase;