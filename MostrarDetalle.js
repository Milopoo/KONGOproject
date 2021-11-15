import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 

let params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var id = params.get('id'); //Busca la variable que tenga nombre id
console.log(id);
var docSnap ; 
    
   
  
    function MostrarData(){
     
      console.log("Document data:", docSnap.data());

      document.getElementById("nombreP").innerHTML = docSnap.data().Name;
      document.getElementById("colorP").innerHTML = "Color: " + docSnap.data().Color;
      document.getElementById("tallaP").innerHTML = "Talla: " +  docSnap.data().Size;
      document.getElementById("textDescripcionP").innerHTML = docSnap.data().Descripcion; 
      document.getElementById("Total").innerHTML = docSnap.data().TOTAL + " COP";
      document.getElementById("PrecioP").innerHTML = docSnap.data().Precio + " COP";
      document.getElementById("imgGorras").src = docSnap.data().url ;

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
  
   