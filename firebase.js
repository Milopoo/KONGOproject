//Aprendiendo
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { set, ref, getDatabase, update, get, child } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDab6n-zj_opyKrNJcOE-T3n9DMCB9egA4",
  authDomain: "gorraskongo.firebaseapp.com",
  databaseURL: "https://gorraskongo-default-rtdb.firebaseio.com",
  projectId: "gorraskongo",
  storageBucket: "gorraskongo.appspot.com",
  messagingSenderId: "26040810819",
  appId: "1:26040810819:web:1d9338f05c9cbb68d183f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Variables lectura de de datos usuario
//var nombreUsuario, correoUsuario, direccion, ciudad, barrio, telefono, codPostal, metodoDavi, metodoNequi;
