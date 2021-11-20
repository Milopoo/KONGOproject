
import { getFirestore, collection, getDoc, doc, updateDoc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 

let params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var id = params.get('id'); //Busca la variable que tenga nombre id
console.log(id);
var docSnap ; 
let visitas =''; 

    
   
  
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

    async function Visitas(){

      const docRef_ = doc(db, "productos", id );
      await updateDoc(docRef_ ,{ contVisitas: visitas
      });

    } 

    async function VisitasML(){

      visitas = Number(docSnap.data().contVisitas);
      visitas++;
      console.log(visitas);
     
      await updateDoc(doc(docRef, "Mujer", "Lujo", id) ,{ "contVisitas": visitas });

    } 

    
    async function VisitasMC(){

      visitas = Number(docSnap.data().contVisitas);
      visitas++;
      console.log(visitas);
     
      await updateDoc(doc(docRef, "Mujer", "Lujo", id) ,{ "contVisitas": visitas });

    } 

    
    async function VisitasHL(){

      visitas = Number(docSnap.data().contVisitas);
      visitas++;
      console.log(visitas);
     
      await updateDoc(doc(docRef, "Mujer", "Lujo", id) ,{ "contVisitas": visitas });

    } 

    
    async function VisitasHC(){

      visitas = Number(docSnap.data().contVisitas);
      visitas++;
      console.log(visitas);
     
      await updateDoc(doc(docRef, "Mujer", "Lujo", id) ,{ "contVisitas": visitas });

    } 

    var docRef = collection (db, "productos" );
    docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", id ));
    
    if (docSnap.exists()) {
       
      MostrarData();
      VisitasML();
      Visitas();
    

    } 
    else 
    { 
      docSnap = await getDoc(doc( docRef, "Hombre", "Lujo", id ));
                  
          if (docSnap.exists()) {
            
            MostrarData();
            VisitasHL();
            Visitas();

          } 
          else 
          {
            docSnap = await getDoc(doc( docRef, "Mujer", "Casual", id ));

            if (docSnap.exists()) {
            
              MostrarData();
              VisitasMC();
              Visitas();
  
            } 
            else 
            {
              docSnap = await getDoc(doc( docRef, "Hombre", "Casual", id ));
              
              if (docSnap.exists()) {
            
                MostrarData();
                VisitasHC();
                Visitas();
    
              } 
              else 
              {
                console.log("No such document!");
                
              }  
      
            }  
    
            
          }  
  
    }  
  
   