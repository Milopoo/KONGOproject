import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();


let textBienvenido = document.getElementById("textBienvenido");
let textRecomendadas = document.getElementById("textRecomendadas");


document.getElementById("Guardar").addEventListener('click', async function(){
    
    const docRef = collection (db, "Contenido" );
    await setDoc(doc( docRef, "Principal"), {
    
        TextBienvenida: textBienvenido.value,
        TextRecomendadas: textRecomendadas.value
        
      });

      console.log("Document written with ID: ", "Texto");
      window.location = "PagPrincipalAdmin.html";


   })
   
  
   const docRef = collection (db, "Contenido" );
   const docSnap = await getDoc(doc( docRef, "Principal" ));
 
   if (docSnap.exists()) {
 
     textBienvenido.value = docSnap.data().TextBienvenida;
     textRecomendadas.value = docSnap.data().TextRecomendadas;
     
 
     console.log("Document data:", docSnap.data());
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }  
     

    
