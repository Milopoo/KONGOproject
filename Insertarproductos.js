import { getFirestore, collection, doc, setDoc, deleteDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

const db = getFirestore();


let nombreP = document.getElementById("nombreP");
let codigoP = document.getElementById("codigoP");
let promocionP = document.getElementById("promocionP");
let cantidadP = document.getElementById("cantidadP");
let colorP = document.getElementById("colorP");
let tallaP = document.getElementById("tallaP");
let PrecioP = document.getElementById("PrecioP");
let selectGender = document.getElementById("selectGender");
let selecCategoria = document.getElementById("selecCategoria");
let textDescripcionP = document.getElementById("textDescripcionP");
let urlimage;
var Total = 0; 

 


document.getElementById("InsBtn").addEventListener('click', async function(){
    const docRef = collection (db, "productos" );
    Total = PrecioP.value - ((promocionP.value*PrecioP.value)/100);
    await setDoc(doc( docRef, selectGender.value, selecCategoria.value, codigoP.value ), {
    
        Name: nombreP.value,
        Code: codigoP.value,
        Promo: promocionP.value,
        Cantidad: cantidadP.value,
        Color: colorP.value,
        Size: tallaP.value,
        Precio: PrecioP.value,
        Descripcion: textDescripcionP.value,
        Gender: selectGender.value,
        Category: selecCategoria.value,
        TOTAL: Total,
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
  
     

    
