import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


    const docRef = collection (db, "Contenido" );
    const docSnap = await getDoc(doc( docRef, "Principal" ));
    
    if (docSnap.exists()) {
       
      console.log("Document data:", docSnap.data());

      document.getElementById("Recomendadas").innerHTML = docSnap.data().TextRecomendadas;
      document.getElementById("Bienvenida").innerHTML = docSnap.data().TextBienvenida;
      
    } 
    else 
    { 
      console.log("No such document!");
    }  
