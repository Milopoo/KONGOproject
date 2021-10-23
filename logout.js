import {  getAuth,  signOut } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const auth = getAuth();


document.getElementById("logout").addEventListener('click', function(){
   
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location = "index.html";
    console.log("Sign-out successful.")
    
    }).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error.code + error.message)
    });
})


 