import { getFirestore, collection, addDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
const db = getFirestore();

let nombreP = document.getElementById("nombreP");
let codigoP = document.getElementById("codigoP");
let promocionP = document.getElementById("promocionP");
let cantidadP = document.getElementById("cantidadP");
let colorP = document.getElementById("colorP");
let tallaP = document.getElementById("tallaP");
let textDescripcionP = document.getElementById("textDescripcionP");


document.getElementById("InsBtn").addEventListener('click', async function(){

    const docRef = await addDoc(collection(db, "Gorras"), {
    
        Name: nombreP.value,
        Code: codigoP.value,
        Promo: promocionP.value,
        Cantidad: cantidadP.value,
        Color: colorP.value,
        Size: tallaP.value,
        Descripcion: textDescripcionP.value

      });
      console.log("Document written with ID: ", docRef.id);
 
   })
 