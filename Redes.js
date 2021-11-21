import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";


const db = getFirestore();

let ws = document.getElementById("ws");
let insta = document.getElementById("insta");
let face = document.getElementById("face");
let mapa = document.getElementById("mapa");


const docRef = collection (db, "Redes" );

document.getElementById("RedBtn").addEventListener('click', async function(){

    await setDoc(doc( docRef, "Links" ), {
    
        Whatsapp: ws.value,
        Instagram: insta.value,
        Facebook: face.value,
        Mapa: mapa.value

      });

      console.log("Document written with ID: ", "Links");
      window.location = "PagPrincipalAdmin.html";


   })

   const docSnap = await getDoc(doc( docRef, "Links" ));

   if(docSnap.exists()){

    ws.value = docSnap.data().Whatsapp;
    insta.value = docSnap.data().Instagram;
    face.value = docSnap.data().Facebook;
    mapa.value = docSnap.data().Mapa; 
    

    console.log("Document data:", docSnap.data());
   }
   else{

    console.log("No existe :(");
   }
      
   

    


       

    
