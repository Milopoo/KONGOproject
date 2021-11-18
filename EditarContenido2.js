import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();

let textRespuesta = document.getElementById("textRespuesta"); 
let textRespuesta1 = document.getElementById("textRespuesta1"); 
let textRespuesta2 = document.getElementById("textRespuesta2"); 
let textRespuesta3 = document.getElementById("textRespuesta3"); 
let textRespuesta4 = document.getElementById("textRespuesta4"); 
let textRespuesta5 = document.getElementById("textRespuesta5"); 
let pregunta1 = document.getElementById("pregunta1"); 
let pregunta2 = document.getElementById("pregunta2"); 
let pregunta3 = document.getElementById("pregunta3"); 
let pregunta4 = document.getElementById("pregunta4"); 
let pregunta5 = document.getElementById("pregunta5"); 
let textTelefono = document.getElementById("textTelefono");
let textCorreo = document.getElementById("textCorreo");



document.getElementById("Guardar2").addEventListener('click', async function(){
    
    const docRef = collection (db, "Contenido" );
    await setDoc(doc( docRef, "Soporte"), {
    
        TextRespuesta: textRespuesta.value,
        TextRespuesta1: textRespuesta1.value,
        TextRespuesta2: textRespuesta2.value,
        TextRespuesta3: textRespuesta3.value,
        TextRespuesta4: textRespuesta4.value,
        TextRespuesta5: textRespuesta5.value,
        TextPregunta1: pregunta1.value,
        TextPregunta2: pregunta2.value,
        TextPregunta3: pregunta3.value,
        TextPregunta4: pregunta4.value,
        TextPregunta5: pregunta5.value,
        Telefono: textTelefono.value,
        Correo: textCorreo.value
        
      });

      console.log("Document written with ID: ", "Soporte");
      window.location = "PagPrincipalAdmin.html";


   })
   
   
   const docRef = collection (db, "Contenido" );
   const docSnap = await getDoc(doc( docRef, "Soporte" ));
 
   if (docSnap.exists()) {
 
        textRespuesta.value = docSnap.data().TextRespuesta;
        textRespuesta1.value = docSnap.data().TextRespuesta1;
        textRespuesta2.value = docSnap.data().TextRespuesta2;
        textRespuesta3.value = docSnap.data().TextRespuesta3;
        textRespuesta4.value = docSnap.data().TextRespuesta4;
        textRespuesta5.value = docSnap.data().TextRespuesta5;
        pregunta1.value = docSnap.data().TextPregunta1;
        pregunta2.value = docSnap.data().TextPregunta2;
        pregunta3.value = docSnap.data().TextPregunta3;
        pregunta4.value = docSnap.data().TextPregunta4;
        pregunta5.value = docSnap.data().TextPregunta5;
        textTelefono.value = docSnap.data().Telefono;
        textCorreo.value = docSnap.data().Correo;
     
 
     console.log("Document data:", docSnap.data());
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }  
     
     

    
