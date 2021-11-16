import { getFirestore, collection, getDoc, doc }  from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(); 


var params = new URLSearchParams(location.search); //Busca todos las variables existentes y las guarda en un arraylist
var index = params.get('index'); //Busca la variable que tenga nombre id
console.log(index);



const querySnapshot = await getDocs(collection(db, 'productos', 'Hombre', 'Casual'));
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

});