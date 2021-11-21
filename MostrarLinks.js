import { getFirestore, collection, doc, setDoc, getDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";


const db = getFirestore();


    const docRef = collection (db, "Redes" );
    const docSnap = await getDoc(doc( docRef, "Links" ));

    console.log("Document data:", docSnap.data());

    document.getElementById("ws").href = docSnap.data().Whatsapp;
    document.getElementById("insta").href = docSnap.data().Instagram;
    document.getElementById("face").href = docSnap.data().Facebook;
    //document.getElementById("mapa").src = docSnap.data().Mapa;
