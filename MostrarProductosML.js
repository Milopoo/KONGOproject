import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id ='';
const  tasksContainer = document.getElementById('tasks-container');


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

const querySnapshot = await getDocs(collection(db, 'productos', 'Mujer', 'Lujo'));
tasksContainer.innerHTML ='';
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 
    tasksContainer.innerHTML += `
    <div class="col-md-12">
     <div class="row2">
       <div class="product">
        <h3 class="product-name"><a href="#">${ doc.data().Name }</a></h3>
         <div class="product-img">
             <a href="detalleGorra.html">
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
  id = doc.id

  

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
  
  window.location = "editarYeliminar.html";

  const docRef = collection (db, "productos" );
  await getDoc(doc( docRef, "Mujer", "Lujo", id ));

    nombreP.value = docSnap.data().Name;
    codigoP.value = docSnap.data().Code;
    promocionP.value = docSnap.data().Promo;
    cantidadP.value = docSnap.data().Cantidad; 
    colorP.value = docSnap.data().Color;
    tallaP.value = docSnap.data().Size;
    PrecioP.value = docSnap.data().Precio;
    textDescripcionP.value = docSnap.data().Descripcion; 
    selectGender.value = docSnap.data().Gender;
    selecCategoria.value = docSnap.data().Category;
    Total = docSnap.data().TOTAL;
    urlimage = docSnap.data().urlimage;
    

  })
