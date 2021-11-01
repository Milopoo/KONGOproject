import { getAuth, signInWithEmailAndPassword,setPersistence,browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
const auth = getAuth();


/*document.getElementById("login").addEventListener('click', function(){

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

    
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 
   })*/

   

 