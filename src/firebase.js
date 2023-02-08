import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSANGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
};


// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();



const auth = firebase.auth();

// google authantication 
const googleProvider = new firebase.auth.GoogleAuthProvider();


const signInWithGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user);
    }).catch((error) => {
        console.log(error.message);
    })
}

export { auth, signInWithGoogle };