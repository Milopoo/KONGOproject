import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


let params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var id = params.get('id'); //Busca la variable que tenga nombre id
console.log(id);


    const docRef = collection (db, "productos" );
    const docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", id ));
  
    if (docSnap.exists()) {
  
      nombreP.value = docSnap.data().Name;
      promocionP.value = docSnap.data().Promo;
      cantidadP.value = docSnap.data().Cantidad; 
      colorP.value = docSnap.data().Color;
      tallaP.value = docSnap.data().Size;
      PrecioP.value = docSnap.data().Precio;
      textDescripcionP.value = docSnap.data().Descripcion; 
      Total = docSnap.data().TOTAL;
      urlimage = docSnap.data().urlimage;
  
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  
  
    console.log(urlimage);
  