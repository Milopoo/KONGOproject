import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


var params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var _url = params.get('id'); //Busca la variable que tenga nombre id
console.log(id);


    const docRef = collection (db, "productos" );
    const docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", _url ));
  
    if (docSnap.exists()) {
  
      nombreP.value = docSnap.data().Name;
      codigoP.value = _url;
      promocionP.value = docSnap.data().Promo;
      cantidadP.value = docSnap.data().Cantidad; 
      colorP.value = docSnap.data().Color;
      tallaP.value = docSnap.data().Size;
      PrecioP.value = docSnap.data().Precio;
      textDescripcionP.value = docSnap.data().Descripcion; 
      selectGender.value = docSnap.data().Gender;
      selecCategoria.value = docSnap.data().Category;
  
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  
  
    