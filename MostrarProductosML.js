import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id ='';
const  tasksContainer = document.getElementById('tasks-container');

const querySnapshot = await getDocs(collection(db, 'productos', 'Mujer', 'Lujo'));
tasksContainer.innerHTML ='';
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
    tasksContainer.innerHTML += `
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
         
         <button class="add-to-wishlist" data-id="${doc.id}"><i class="fa fa-heart-o"></i><span class="tooltipp">Añadir a la
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

  //--------Carrito de compra 
  const anadir = document.querySelectorAll('.add-to-wishlist')
  var total = 0
  var totalProducto = 0
  anadir.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log("id", e.target.dataset.id)
      id = e.target.dataset.id;
        setBolsa(e.target.dataset.id);
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
  // Bolsa de compra :)
async function setBolsa(id) {

  const docRef = collection(db, "productos");
  const docSnap = await getDoc(doc(docRef, id));
  console.log("id", id);

  if (docSnap.exists()) {
    const producto = {
      id: id,
      title: docSnap.data().Name,
      categoria: docSnap.data().Category,
      precio: docSnap.data().TOTAL,
      precioDes: docSnap.data().Precio,
      cantidad: 1
    }
    intoBolsa(producto)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}