import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id ='';

const  tasksContainer2 = document.getElementById('tasks-container2');

const querySnapshot = await getDocs(collection(db, 'productos', 'Hombre', 'Lujo'));
tasksContainer2.innerHTML ='';
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
    tasksContainer2.innerHTML += `
    <div class="col-md-12">
    <div class="row2">
      <div class="product">
       <h3 class="product-name"><a href="#">${ doc.data().Name }</a></h3>
        <div class="product-img" >
            <a href="#" >
                <img src=${ doc.data().url } data-id="${doc.id}">
            </a>
        </div>
        <div class="product-body">
            <p class="product-category">${ doc.data().Category }</p>
            <h4 class="product-price">${ doc.data().TOTAL } COP <del class="product-old-price">${ doc.data().Precio } COP</del></h4>
   
        </div>
        <div class="product-btns">
        
        <button class="add-to-wishlist data-id="${doc.id}"><i class="fa fa-heart-o"></i><span class="tooltipp">Añadir a la
        bolsa</span></button>
           </div>
        </div>
       </div>
     </div>`

 //console.log(doc.id, " => ", doc.data());
 //id = doc.id; 

//------- ir a detalle 

 const AbrirDetalle = document.querySelectorAll('.product-img')
 AbrirDetalle.forEach( btn =>{
 btn.addEventListener( 'click', (e)=>{
 console.log("id", e.target.dataset.id)
 id = e.target.dataset.id;
 DetalleProducto(e.target.dataset.id);
 
 })
 })


});

 //----- Ir a detalle 

 async function DetalleProducto(id){

   const docRef = collection (db, "productos" );
   const docSnap = await getDoc(doc( docRef, id ));
   console.log("id", id);
 
   if (docSnap.exists()) {
 
     window.location.href = "detalleGorra.html" + '?id=' + id;
     return false;
 
   } else {
     // doc.data() will be undefined in this case
     console.log("No such document!");
   }  
 
 }