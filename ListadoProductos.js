/*import { getFirestore, collection, addDoc, doc, setDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

const db = getFirestore();

let nombreP = document.getElementById("nombreP");
let codigoP = document.getElementById("codigoP");
let promocionP = document.getElementById("promocionP");
let cantidadP = document.getElementById("cantidadP");
let colorP = document.getElementById("colorP");
let tallaP = document.getElementById("tallaP");
let textDescripcionP = document.getElementById("textDescripcionP");
let urlimage;


async function GetProduct(){

    var ref = doc(db, "Gorras", codigoP.value);
    const docSnap = await getDoc(ref);

    if(docSnap.exists()){

        nombreP.value = docSnap.data().Name;
        codigoP.value = docSnap.data().Code;
        promocionP.value = docSnap.data().Promo;
        cantidadP.value = docSnap.data().Cantidad;
        colorP.value = docSnap.data().Color;
        tallaP.value = docSnap.data().Size;
        textDescripcionP.value = docSnap.data().Descripcion;
    } 
    else{
        alert("No such Document");
    }

}

window.addEventListener('DOMContentLoaded', GetProduct);
    
   */
