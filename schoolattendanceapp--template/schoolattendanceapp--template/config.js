 import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD61VPL7d-Zv7IlGpPiXwoLWRQ5k4Q3EF0",
  authDomain: "school-attendance-app-15fac.firebaseapp.com",
  projectId: "school-attendance-app-15fac",
  storageBucket: "school-attendance-app-15fac.appspot.com",
  messagingSenderId: "10223902911",
  appId: "1:10223902911:web:d9ce83e96a0bb1b7fa260a"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  