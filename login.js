 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDab6n-zj_opyKrNJcOE-T3n9DMCB9egA4",
   authDomain: "gorraskongo.firebaseapp.com",
   projectId: "gorraskongo",
   storageBucket: "gorraskongo.appspot.com",
   messagingSenderId: "26040810819",
   appId: "1:26040810819:web:1d9338f05c9cbb68d183f6"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


// inicio sesión------------ 

 document.getElementById("login").addEventListener('click', function(){
   const email = document.getElementById("email").value
   const contraseña = document.getElementById("contraseña").value
   
   signInWithEmailAndPassword(auth, email, contraseña).then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   
   window.location = "PagPrincipalAdmin.html";
   console.log("ingreso exitoso")
  
   })
   .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error.code + error.message)
   });

// cerrar sesión------------ 

   document.getElementById("logout").addEventListener('click', function(){
   
    signOut(auth).then(() => {
    // Sign-out successful.
    //window.location = "index.html";
    console.log("Sign-out successful.")
    
    }).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error.code + error.message)
    });
})

// observador------------ 
   /* function estado(){
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      window.location = "inicio.html";
    } else {
      // User is signed out
      window.location = "index.html";
    }
  });
    }
    estado();*/
 })
