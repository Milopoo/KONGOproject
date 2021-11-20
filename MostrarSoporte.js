import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


    const docRef = collection (db, "Contenido" );
    const docSnap = await getDoc(doc( docRef, "Soporte" ));
    
    if (docSnap.exists()) {
       
      console.log("Document data:", docSnap.data());

      document.getElementById("textRespuesta").innerHTML = docSnap.data().TextRespuesta;
      document.getElementById("textRespuesta1").innerHTML = docSnap.data().TextRespuesta1;
      document.getElementById("textRespuesta2").innerHTML = docSnap.data().TextRespuesta2;
      document.getElementById("textRespuesta3").innerHTML = docSnap.data().TextRespuesta3;
      document.getElementById("textRespuesta4").innerHTML = docSnap.data().TextRespuesta4;
      document.getElementById("textRespuesta5").innerHTML = docSnap.data().TextRespuesta5;
      document.getElementById("pregunta1").innerHTML = docSnap.data().TextPregunta1;
      document.getElementById("pregunta2").innerHTML = docSnap.data().TextPregunta2;
      document.getElementById("pregunta3").innerHTML = docSnap.data().TextPregunta3;
      document.getElementById("pregunta4").innerHTML = docSnap.data().TextPregunta4;
      document.getElementById("pregunta5").innerHTML = docSnap.data().TextPregunta5;
      document.getElementById("textTelefono").innerHTML = docSnap.data().Telefono;
      document.getElementById("textCorreo").innerHTML = docSnap.data().Correo;

    } 
    else 
    { 
      console.log("No such document!");
    }  
