import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
const auth = getAuth();


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
 
   })
 