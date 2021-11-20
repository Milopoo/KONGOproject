import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();


let textGorras = document.getElementById("textGorras");


document.getElementById("Guardar").addEventListener('click', async function(){
    
    const docRef = collection (db, "Contenido" );
    await setDoc(doc( docRef, "TextGorras"), {
    
        Descripcion: textGorras.value,
        
      });

      console.log("Document written with ID: ", "TextGorras");
      window.location = "PagPrincipalAdmin.html";


   })
   
  
   const docRef = collection (db, "Contenido" );
   const docSnap = await getDoc(doc( docRef, "TextGorras" ));
 
   if (docSnap.exists()) {
 
     textGorras.value = docSnap.data().Descripcion;
     
     console.log("Document data:", docSnap.data());
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }  
     

    
