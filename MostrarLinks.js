import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";


const db = getFirestore();


    const docRef = collection (db, "Redes" );
    docSnap = await getDoc(doc( docRef, "Links" ));

    console.log("Document data:", docSnap.data());

    document.getElementById("ws").href = docSnap.data().Whatsapp;
    document.getElementsByClassName("icon-ig").href = docSnap.data().Instagram;
    document.getElementById("face").href = docSnap.data().Facebook;
    document.getElementsByClassName("gmap_iframe").scr = docSnap.data().Mapa;  



       

    
