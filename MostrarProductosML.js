import { getFirestore, collection, getDocs}  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();

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
             <a href="editarYeliminar.html">
                 <button class="edit-product"><i class="fa fa-pencil"></i><span
                         class="tooltipp">Editar</span></button>
             </a>
             <a href="#">
                 <button class="delete-product" id="DeleteBtn"><i class="fa fa-trash"></i><span
                         class="tooltipp">Eliminar</span></button>
             </a>
            </div>
         </div>
        </div>
      </div>`
    

  console.log(doc.id, " => ", doc.data());
});

