import { getFirestore, collection, doc, setDoc, deleteDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();


let textBienvenido = document.getElementById("textBienvenido");
let textRecomendadas = document.getElementById("textRecomendadas");
let textMision = document.getElementById("textMision");
let textVision = document.getElementById("textVision"); 
let textHistoria = document.getElementById("textHistoria");
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


const docRef = collection (db, "Contenido" );

document.getElementById("Guardar").addEventListener('click', async function(){

    await setDoc(doc( docRef, 'Texto'), {
    
        TextBienvenida: textBienvenido.value,
        TextRecomendadas: textRecomendadas.value,
        TextMision: textMision,
        TextVision: textVision,
        TextHistoria: textHistoria,
        TextRespuesta: textRespuesta,
        TextRespuesta1: textRespuesta1,
        TextRespuesta2: textRespuesta2,
        TextRespuesta3: textRespuesta3,
        TextRespuesta4: textRespuesta4,
        TextRespuesta5: textRespuesta5,
        TextPregunta1: pregunta1,
        TextPregunta2: pregunta2,
        TextPregunta3: pregunta3,
        TextPregunta4: pregunta4,
        TextPregunta5: pregunta5,
        Telefono: textTelefono,
        Correo: textCorreo
        
      });

      console.log("Document written with ID: ", codigoP.value);
      window.location = "EyEproductos.html";


   })
   
     

    
