const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
//content acceder a los elementos en los template
const templateCard = document.getElementById('articulo').content
const templateFooter = document.getElementById('template-footer').content
const templateBolsa = document.getElementById('template-bolsa').content
const fragment = document.createDocumentFragment()
let bolsa = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if(localStorage.getItem('bolsa')){
        bolsa = JSON.parse(localStorage.getItem('bolsa'))
        pintarBolsa()
    }
})
cards.addEventListener('click', e => {
    addBolsa(e)
})
items.addEventListener('click', e =>{
    btnAccion(e)
})

const fetchData = async () => {
    try{
        const res = await fetch('carritoTemp.json')
        const data = await res.json()
        //console.log(data)
        pintarArticulos(data)
    }catch (error){
        console.log(error);
    }
}
const pintarArticulos = data => {
    //console.log(data)
    data.forEach(producto => {
      templateCard.querySelector('h5').textContent = producto.title 
      templateCard.querySelector('p').textContent = producto.precio 
      templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl) 
      templateCard.querySelector('button').dataset.id = producto.id
      const clone  = templateCard.cloneNode(true)
      fragment.appendChild(clone) 

        //console.log(producto)  
    })
    cards.appendChild(fragment)
    //console.log(data)
}
const addBolsa = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btnComprar'))
    if(e.target.classList.contains('btnComprar')){
        setBolsa(e.target.parentElement) 
    }
    //Detener otro cualquier evento
    e.stopPropagation()

}
const setBolsa = objeto =>{
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btnComprar').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if(bolsa.hasOwnProperty(producto.id)){
        producto.cantidad = bolsa[producto.id].cantidad + 1
    }
    bolsa[producto.id] = {...producto}
    pintarBolsa()
}
const pintarBolsa = () =>{
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
const pintarFooter = () =>{
    footer.innerHTML = ''
    if(Object.keys(bolsa).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Tu bolsa está vacía</th>
        `
        return 
    }
    const nCantidad = Object.values(bolsa).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(bolsa).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-bolsa')
    btnVaciar.addEventListener('click', () =>{
        bolsa = {}
        pintarBolsa()
    })
}
const btnAccion = e =>{
    //console.log(e.target)
    //Aumentar cantidad
    if(e.target.classList.contains('btn-info')){
        bolsa[e.target.dataset.id]
        const producto = bolsa[e.target.dataset.id]
        producto.cantidad ++
        bolsa[e.target.dataset.id] = {...producto}
        pintarBolsa()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = bolsa[e.target.dataset.id]
        producto.cantidad --
        if(producto.cantidad === 0 ){
            delete bolsa[e.target.dataset.id]
        }
        pintarBolsa()
    }
    e.stopPropagation()
}