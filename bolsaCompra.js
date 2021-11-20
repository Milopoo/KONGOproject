const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
//content acceder a los elementos en los template
const templateCard = document.getElementById('articulo').content
const templateFooter = document.getElementById('template-footer').content
const templateBolsa = document.getElementById('template-bolsa').content
const fragment = document.createDocumentFragment()
var total = 0
var totalProducto = 0
var dataF = []
var dataJson = []
var cont = 0
let bolsa = {}
let listaBolsa = {}
var datos = []

//const fs = require('fs')
//localStorage.clear()
//dataF = localStorage.getItem('productos')
//dataJson = JSON.parse(dataF)
//console.log(dataF)
//console.log(dataF)
//const fs = require('fs')

/*const saveData = (data, file) =>{
    const finished = (error) =>{
        if(error){
            console.log(error)
            return;
        }
    }

    const jsonData = JSON.stringify(data, null, 2)
    fs.writeFile(file, jsonData, finished) 
}
saveData(dataJson, 'productos.json')
*/

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

const fetchData = async () => {
    try {
        const res = await fetch('carritoTemp.json')
        const data = await res.json()
        console.log(data)
        pintarArticulos(data)
    } catch (error) {
        console.log(error);
    }
}
const pintarArticulos = data => {
    //console.log(data)
    data.forEach(producto => {
        templateCard.querySelector('h3').textContent = producto.title
        templateCard.querySelector('h4').textContent = producto.precio
        templateCard.querySelector('h6').textContent = producto.precioDes
        templateCard.querySelector('p').textContent = producto.categoria
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('button').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
        //console.log(producto)  
    })
    cards.appendChild(fragment)
    //console.log(data)
}
const addBolsa = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btnComprar'))
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
        id: objeto.querySelector('.add-to-wishlist').dataset.id,
        title: objeto.querySelector('h3').textContent,
        categoria: objeto.querySelector('p').textContent,
        precio: objeto.querySelector('h4').textContent,
        precioDes: objeto.querySelector('h6').textContent,
        cantidad: 1
    }
    
    if (bolsa.hasOwnProperty(producto.id)) {
        producto.cantidad = bolsa[producto.id].cantidad + 1
    } 

    bolsa[producto.id] = { ...producto }
    console.log("Esta es la super bolsa " + bolsa)
    pintarBolsa()
}
const pintarBolsa = () => {
    //console.log(bolsa)
    items.innerHTML = ''
    Object.values(bolsa).forEach(producto => {
        templateBolsa.querySelector('th').textContent = producto.id
        templateBolsa.querySelectorAll('td')[0].textContent = producto.title
        templateBolsa.querySelectorAll('td')[1].textContent = producto.cantidad
        templateBolsa.querySelector('.btn-info').dataset.id = producto.id
        templateBolsa.querySelector('.btn-danger').dataset.id = producto.id
        templateBolsa.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateBolsa.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()

    localStorage.setItem('bolsa', JSON.stringify(bolsa))
    localStorage.setItem('listaBolsa', JSON.stringify(listaBolsa))
}
const pintarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(bolsa).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Tu bolsa está vacía</th>
        `
        bolsa = {}
        localStorage.removeItem('total')
        localStorage.removeItem('totalProducto')
        listaBolsa = {}
        cont = 0
        return
    }
    const nCantidad = Object.values(bolsa).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(bolsa).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    localStorage.setItem('total', nPrecio)
    total = localStorage.getItem('total')
    localStorage.setItem('totalProducto', nCantidad)
    totalProducto = localStorage.getItem('totalProducto')
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-bolsa')
    btnVaciar.addEventListener('click', () => {
        bolsa = {}
        localStorage.removeItem('total')
        localStorage.removeItem('totalProducto')
        pintarBolsa()
    })
}
const btnAccion = e => {
    //console.log(e.target)
    //Aumentar cantidad
    if (e.target.classList.contains('btn-info')) {
        bolsa[e.target.dataset.id]
        const producto = bolsa[e.target.dataset.id]
        producto.cantidad++
        bolsa[e.target.dataset.id] = { ...producto }
        pintarBolsa()
    }
    if (e.target.classList.contains('btn-danger')) {
        const producto = bolsa[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            
            delete bolsa[e.target.dataset.id]
        }
        pintarBolsa()
    }
    e.stopPropagation()
}
