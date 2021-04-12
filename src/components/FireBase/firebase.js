import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import PlantConverter from '../../models/PlantConverter';

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
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.plantConverter = new PlantConverter();
  }

  addPlant(plant) {
    this.getPlantsCollectionReference().doc(plant.id).set(this.plantConverter.plantToFirestore(plant))
      .then((docRef) => {
        console.log("Document written: ", docRef);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getPlantsCollectionReference() {
    return this.db.collection("users").doc(this.auth.currentUser.uid).collection("plants");
  }

  deletePlant(plantId) {
    this.getPlantsCollectionReference().doc(plantId).delete()
      .then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
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

  signInAnonymously(){
    this.auth.signInAnonymously()
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  }
}


export default Firebase;