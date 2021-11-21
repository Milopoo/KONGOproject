import { getFirestore, collection, getDocs, doc, getDoc, query, where }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 
var id ='';
const  tasksContainer = document.getElementById('tasks-container');

var params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var index = params.get('index'); //Busca la variable que tenga nombre id
console.log(index);

const q = query(collection(db, "productos"), where("Name", "==", index));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

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
             <a href="#">
                 <button class="edit-product" data-id="${doc.id}"><i class="fa fa-pencil"></i><span
                         class="tooltipp">Editar</span></button>
             </a>
             <a href="#">
                 <button class="delete-product" data-id="${doc.id}"><i class="fa fa-trash"></i><span
                         class="tooltipp">Eliminar</span></button>
             </a>
            </div>
         </div>
        </div>
      </div>`
 
  console.log(doc.id, " => ", doc.data());
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
 
})


async function DetalleProducto(id){

    const docRef = collection (db, "productos" );
    const docSnap = await getDoc(doc( docRef, id ));
    console.log("id", id);
  
    if (docSnap.exists()) {
  
      window.location.href = "EditarDetalle.html" + '?id=' + id;
      return false;
  
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  
  
  }

