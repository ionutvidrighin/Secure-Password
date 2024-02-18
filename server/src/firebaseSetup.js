// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
const { getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDzjSV8TXrpsnw3uuEd73lToVK9yiCkMOs",
	authDomain: "password-aed6d.firebaseapp.com",
	projectId: "password-aed6d",
	storageBucket: "password-aed6d.appspot.com",
	messagingSenderId: "731180445256",
	appId: "1:731180445256:web:950048b7da6278a779327d",
	measurementId: "G-B927EHVSP0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;

