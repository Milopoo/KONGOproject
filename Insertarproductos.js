import { getFirestore, collection, addDoc, doc, setDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

const db = getFirestore();

let nombreP = document.getElementById("nombreP");
let codigoP = document.getElementById("codigoP");
let promocionP = document.getElementById("promocionP");
let cantidadP = document.getElementById("cantidadP");
let colorP = document.getElementById("colorP");
let tallaP = document.getElementById("tallaP");
let textDescripcionP = document.getElementById("textDescripcionP");
let urlimage;


document.getElementById("InsBtn").addEventListener('click', async function(){
    
    
    const docRef = await setDoc(doc(db, "Gorras", codigoP.value), {
    
        Name: nombreP.value,
        Code: codigoP.value,
        Promo: promocionP.value,
        Cantidad: cantidadP.value,
        Color: colorP.value,
        Size: tallaP.value,
        Descripcion: textDescripcionP.value,
        url: urlimage

      });
      console.log("Document written with ID: ", codigoP.value);
      window.location = "EyEproductos.html";


   })

       //Storage-----------

       document.getElementById("subirimg").addEventListener('click', function(){
        const file = document.getElementById("imgGorras").files[0]
        const storage = getStorage();
        const storageRef = ref( storage, 'images/'+ file.name );
        var metadata = { contentType: 'image/jpeg'};
    
        /*uploadBytes(storageRef, file).then((snapshot) =>{
        console.log('Uploaded a blob or file!');
        });*/

        uploadBytesResumable(storageRef, file, metadata).then((snapshot) => {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
         // Let's get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
        console.log('File available at', url);
        // ...
        urlimage= url;
        });
        }).catch((error) => {
         console.error('Upload failed', error);
         // ...
         });
        
        
     })
  