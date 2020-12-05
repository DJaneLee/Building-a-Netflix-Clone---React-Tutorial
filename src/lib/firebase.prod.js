import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to somehow seed the database

// we need a config here

const config = {
  apiKey: "AIzaSyD_4WfS8F6wQOk31sUO0Ssd4Imr986YejM",
  authDomain: "netflix-firebase-react.firebaseapp.com",
  projectId: "netflix-firebase-react",
  storageBucket: "netflix-firebase-react.appspot.com",
  messagingSenderId: "824303302172",
  appId: "1:824303302172:web:fdade0e1253d75383f51d9",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
