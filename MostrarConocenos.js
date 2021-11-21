import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


    const docRef = collection (db, "Contenido" );
    const docSnap = await getDoc(doc( docRef, "Conocenos" ));
    
    if (docSnap.exists()) {
       
      console.log("Document data:", docSnap.data());

      document.getElementById("textMision").innerHTML = docSnap.data().TextMision;
      document.getElementById("textVision").innerHTML = docSnap.data().TextVision;
      document.getElementById("textHistoria").innerHTML = docSnap.data().TextHistoria;
      
    } 
    else 
    { 
      console.log("No such document!");
    }  
