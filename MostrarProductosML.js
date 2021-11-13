import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id ='';
const  tasksContainer = document.getElementById('tasks-container');

letparams = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var id = params.get('id'); //Busca la variable que tenga nombre id
console.log(id); 


const querySnapshot = await getDocs(collection(db, 'productos', 'Mujer', 'Lujo'));
tasksContainer.innerHTML ='';
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
    tasksContainer.innerHTML += `
    <div class="col-md-12">
     <div class="row2">
       <div class="product">
        <h3 class="product-name"><a href="#">${ doc.data().Name }</a></h3>
         <div class="product-img" id= "image">
             <a href="#" >
                 <img src=${ doc.data().url } >
             </a>
         </div>
         <div class="product-body">
             <p class="product-category">${ doc.data().Category }</p>
             <h4 class="product-price">${ doc.data().TOTAL } COP <del class="product-old-price">${ doc.data().Precio } COP</del></h4>
    
         </div>
         <div class="product-btns">
             <a href="#">
                 <button class="btn btn-primary edit-product" id ="UpdateBtn"><i class="fa fa-pencil"></i><span
                         class="tooltipp">Editar</span></button>
             </a>
             <a href="#">
                 <button class="btn btn-secondary delete-product" id ="DeleteBtn"><i class="fa fa-trash"></i><span
                         class="tooltipp">Eliminar</span></button>
             </a>
            </div>
         </div>
        </div>
      </div>`
 
  console.log(doc.id, " => ", doc.data());
  id = doc.id;

  

});

//----------Eliminar datos 

document.getElementById("DeleteBtn").addEventListener('click', async function(){

  const docRef = collection (db, "productos" );
  await deleteDoc(doc( docRef, "Mujer", "Lujo", id ));

  
  console.log(" Delete! ");
  window.location = "EyEproductos.html";

  })

//------- Modificar datos 

document.getElementById("UpdateBtn").addEventListener('click', async function(){

  const docRef = collection (db, "productos" );
  const docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", id ));
  console.log("id", id);

  if (docSnap.exists()) {

    window.location.href = "editarYeliminar.html" + '?id=' + id;
    return false;

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }  

  })

  //----- Ir a detalle 

  document.getElementById("image").addEventListener('click', async function(){

    const docRef = collection (db, "productos" );
    const docSnap = await getDoc(doc( docRef, "Mujer", "Lujo", id ));
    console.log("id", id);
  
    if (docSnap.exists()) {
  
      window.location.href = "EditarDetalle.html" + '?id=' + id;
      return false;
  
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }  
  
    })