import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


var params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var id = params.get('id'); //Busca la variable que tenga nombre id
console.log(id);
var docSnap ; 
    
   
  
    function MostrarData(){
      
      nombreP.value = docSnap.data().Name;
      codigoP.value = id;
      promocionP.value = docSnap.data().Promo;
      cantidadP.value = docSnap.data().Cantidad; 
      colorP.value = docSnap.data().Color;
      tallaP.value = docSnap.data().Size;ipcion; 
      selectGender.value = docSnap.data().Gender;
      PrecioP.value = docSnap.data().Precio;
      textDescripcionP.value = docSnap.data().Descr
      selecCategoria.value = docSnap.data().Category;
  
      console.log("Document data:", docSnap.data());

    }

    const docRef = collection (db, "productos" );
    docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", id ));
    
    if (docSnap.exists()) {
       
      MostrarData();

    } 
    else 
    { 
      docSnap = await getDoc(doc( docRef, "Hombre", "Lujo", id ));
                  
          if (docSnap.exists()) {
            
            MostrarData();

          } 
          else 
          {
            docSnap = await getDoc(doc( docRef, "Mujer", "Casual", id ));

            if (docSnap.exists()) {
            
              MostrarData();
  
            } 
            else 
            {
              docSnap = await getDoc(doc( docRef, "Hombre", "Casual", id ));
              
              if (docSnap.exists()) {
            
                MostrarData();
    
              } 
              else 
              {
                console.log("No such document!");
                
              }  
      
            }  
    
            
          }  
  
    }  
  
   