document.addEventListener('DOMContentLoaded', cargaInicial);
Swal.fire({
    html: `<h1>Bienvenido a los Mejores Juegos de WII</h1>`,
});

const contenedorProducto = document.getElementById("stockProductos")

const contenedorCarrito = document.getElementById("carritocontenedor")

const vaciarCarrito = document.getElementById("confirmarCompra")

const precioTotal = document.getElementById("preciototal")

const contadorcarrito = document.getElementById("contadorcarrito")

let carrito = []

vaciarCarrito.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})

const renderizarjuegos = () => {
 juegos.forEach((producto) => { 
    const div = document.createElement("div")
    div.classList.add('col-12');
        div.classList.add('col-md-3');
        div.classList.add('mb-5');
        div.classList.add('d-flex');
        div.classList.add('cartGame');


    div.innerHTML = `
    <div class="card">
    <br>
    <h2 class="card-title">${producto.nombrejuego}</h2>
    <br>
<img class="ddiv card-img-top" src="${producto.img}" alt="...">
<div class="card-body">
<p class="card-text">${producto.descripcion}</p>
<br> 

</div>
<div class="botonAgregar">
<h3> ${producto.Precio}</h3>
<button class="boton" id="agregar${producto.id}">Agregar a compras</button>
</div>
</div> `
    contenedorProducto.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`);
        
    boton.addEventListener('click', ()=>{
    
        agregarProductoAlCarrito(producto.id);
    })

})
}

const agregarProductoAlCarrito = (productoId) => {
    const item = juegos.find( (producto) => producto.id === productoId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = (productoId) => {
    const iten = carrito.find((producto) => producto.id === productoId)
    const indice = carrito.indexOf(iten)

        carrito.splice(indice, 1)

        actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""
    
    carrito.forEach((producto)=>{
        const div = document.createElement("div")
        div.classList = ("cardgame")

    div.innerHTML = `
    <div class="cardcompradas">
<img class="ddiv card-img-top" src="${producto.img}" alt="...">
<div class="card-bodycarrito">
<h5 class="card-title shopping-cart-item-title">${producto.nombrejuego}</h5>
<p class="shoppingCartItemPrice">${producto.Precio}</p>
<p > cantidad <span id="cantidad"> ${producto.cantidad} </span></p>
<button onclick="eliminarDelCarrito(${producto.id})" class="buttonEliminar">Eliminar</button> 
</div>
</div> `
   contenedorCarrito.appendChild(div)
    precioTotal.innerText = carrito.reduce((acc , producto) => acc + producto.cantidad)
})

    contadorcarrito.innerText = carrito.length

    
}

const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  function cargarCarritoDeLocalStorage () {
    if (localStorage.getItem('carrito') !== null) {
          carrito = JSON.parse(localStorage.getItem('carrito'));
      }
  }
    function cargaInicial(){
      cargarCarritoDeLocalStorage();
      renderizarjuegos()
      actualizarCarrito()
  
  }

document.querySelector("#confirmarCompra").addEventListener("click", ()=>{
    Swal.fire(
      'Genial',
      'Ya confirmamos tu compra',
      'success'
    )
  })