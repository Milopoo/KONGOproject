const templateFooter = document.getElementById('template-footer').content
const templateBolsa = document.getElementById('template-bolsa').content
const fragment = document.createDocumentFragment()
let bolsa = {}
var total = 0
var totalProducto = 0
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('bolsa')) {
        bolsa = JSON.parse(localStorage.getItem('bolsa'))
        pintarBolsa()
    }
})

items.addEventListener('click', e => {
    btnAccion(e)
})

function intoBolsa(producto){
    if (bolsa.hasOwnProperty(producto.id)) {
        producto.cantidad = bolsa[producto.id].cantidad + 1
      }
  
      bolsa[producto.id] = { ...producto }
      //console.log(bolsa)
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
function Envio_Directo(name) { //envio directo
    window.location.href = "facturacion.html" + '?id=' + name; //Redireccionar la pagina al link con el id
}
























 function nose(id){
    console.log("no se")
}
