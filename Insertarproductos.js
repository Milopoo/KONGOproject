import { getFirestore, collection, addDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getStorage, ref, uploadBytes}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

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
      window.location = "EyEproductos.html";


   })

       //Storage-----------

       document.getElementById("InsBtn").addEventListener('click', function(){
        const file = document.getElementById("imgGorras").files[0]
        const storage = getStorage();
        const storageRef = ref( storage, "Images" + file.name );
    
        uploadBytes(storageRef, file).then((snapshot) =>{
        console.log('Uploaded a blob or file!');
        });
    
     })
  