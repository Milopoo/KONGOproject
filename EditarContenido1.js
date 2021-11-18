import { getFirestore, collection, doc, setDoc, getDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();

let textMision = document.getElementById("textMision");
let textVision = document.getElementById("textVision"); 
let textHistoria = document.getElementById("textHistoria");

document.getElementById("Guardar1").addEventListener('click', async function(){
    
    const docRef = collection (db, "Contenido" );
    await setDoc(doc( docRef, "Conocenos"), {
    
        TextMision: textMision.value,
        TextVision: textVision.value,
        TextHistoria: textHistoria.value
        
      });

      console.log("Document written with ID: ", "Conocenos");
      window.location = "PagPrincipalAdmin.html";


   })

   const docRef = collection (db, "Contenido" );
   const docSnap = await getDoc(doc( docRef, "Conocenos" ));
 
   if (docSnap.exists()) {
 
    textMision.value = docSnap.data().TextMision;
    textVision.value = docSnap.data().TextVision;
    textHistoria.value = docSnap.data().TextHistoria;
     
 
     console.log("Document data:", docSnap.data());
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }  
     
   
     

    
