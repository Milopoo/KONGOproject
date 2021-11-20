import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore();
var id = '';
const tasksContainer = document.getElementById('tasks-container');

const querySnapshot = await getDocs(collection(db, 'productos'));
tasksContainer.innerHTML = '';
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots

  tasksContainer.innerHTML += `
    <div class="col-md-12">
     <div class="row2">
       <div class="product">
        <h3 class="product-name"><a href="#">${doc.data().Name}</a></h3>
         <div class="product-img" >
             <a href="#" >
                 <img src=${doc.data().url} data-id="${doc.id}">
             </a>
         </div>
         <div class="product-body">
             <p class="product-category">${doc.data().Category}</p>
             <h4 class="product-price">${doc.data().TOTAL} COP <del class="product-old-price">${doc.data().Precio} COP</del></h4>
    
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
  AbrirDetalle.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log("id", e.target.dataset.id)
      id = e.target.dataset.id;
      DetalleProducto(e.target.dataset.id);

    })
  })

  //--------Carrito de compra 
  const añadir = document.querySelectorAll('.add-to-wishlist')
  añadir.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log("id", e.target.dataset.id)
      id = e.target.dataset.id;
      añadirBolsa(e.target.dataset.id);

    })
  })
});

//----- Ir a detalle 

async function DetalleProducto(id) {

  const docRef = collection(db, "productos");
  const docSnap = await getDoc(doc(docRef, id));
  console.log("id", id);

  if (docSnap.exists()) {

    window.location.href = "detalleGorra.html" + '?id=' + id;
    return false;

  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function añadirBolsa(id) {
  const docRef = collection(db, "productos");

  const cards = document.getElementById('cards')
  const items = document.getElementById('items')
  const footer = document.getElementById('footer')

  //Elementos del template
  const templateFooter = document.getElementById('template-footer').content
  const templateBolsa = document.getElementById('template-bolsa').content
  const fragment = document.createDocumentFragment()
  var total = 0
  var totalProducto = 0
  var cont = 0
  var aux = ''
  var dat = []

  let bolsa = {}
  const docSnap = await getDoc(doc(docRef, id));
  //console.log("id", id);
  aux = docSnap.data()
  aux = JSON.stringify(docSnap.data())
  dat.push(JSON.parse(aux))
  console.log(dat)


  if (docSnap.exists()) {
    //console.log(docSnap.data())

    document.addEventListener('DOMContentLoaded', () => {
      fetchData()
      if (localStorage.getItem('bolsa')) {
        bolsa = JSON.parse(localStorage.getItem('bolsa'))
        listaBolsa = JSON.parse(localStorage.getItem('listaBolsa'))
        pintarBolsa()
      }
    })
    cards.addEventListener('click', e => {
      addBolsa(e)
    })
    items.addEventListener('click', e => {
      btnAccion(e)
    })
    
        //const data = docSnap.data();
      

    const addBolsa = e => {
      //console.log(data.Code)
      //console.log(e.target.classList.contains('add-to-wishlist'))
      if (e.target.classList.contains('add-to-wishlist')) {
          setBolsa(e.target.parentElement)
      }
      //Detener otro cualquier evento
      e.stopPropagation()
  }
  const setBolsa = objeto => {
    //console.log(objeto)
    cont = cont + 1
    const producto = {
        id: objeto.querySelector('.add-to-wishlist').dataset.data.Code,
        Nombre: objeto.querySelector('h3').data.Name,
        Categoria: objeto.querySelector('p').data.Category,
        TOTAL: objeto.querySelector('h4').data.TOTAL,
        Precio: objeto.querySelector('del').data.Precio,
        cantidad: 1
    }
    
    if (bolsa.hasOwnProperty(producto.id)) {
        producto.cantidad = bolsa[producto.id].cantidad + 1
    } 
    bolsa[producto.id] = { ...producto }
    pintarBolsa()
}
const pintarBolsa = () => {
  //console.log(bolsa)
  items.innerHTML = ''
  Object.values(bolsa).forEach(producto => {
      templateBolsa.querySelector('th').textContent = producto.id
      templateBolsa.querySelectorAll('td')[0].textContent = producto.Nombre
      templateBolsa.querySelectorAll('td')[1].textContent = producto.cantidad
      templateBolsa.querySelector('.btn-info').dataset.id = producto.id
      templateBolsa.querySelector('.btn-danger').dataset.id = producto.id
      templateBolsa.querySelector('span').textContent = producto.cantidad * producto.TOTAL

      const clone = templateBolsa.cloneNode(true)
      fragment.appendChild(clone)
  })
  items.appendChild(fragment)
  //pintarFooter()

  localStorage.setItem('bolsa', JSON.stringify(bolsa))
  localStorage.setItem('listaBolsa', JSON.stringify(listaBolsa))
}
  }
}