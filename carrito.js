const carritoDeCompras = [];

const cargarAlCarrito = (productoId)=>{
const contenedorCarrito = document.getElementById("contenedor-carrito")

    const agregaProductosCarrito = ()=> {
        
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidadVendida += 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<div><img src="${producto.imagen}" alt="${producto.nombre}" class="imagenProductoEnCarrito"></div>
                        <div><p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidadVendida}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button></div>`;
        contenedorCarrito.appendChild(div)
    }

    agregaProductosCarrito()
}

const modalContenedor = document.querySelector(".header__nav__div__div__div")
const abrirCarrito = document.getElementById("abrir")
const cerrarCarrito = document.getElementById("cerrar")
const modalCarrito = document.querySelector("#contenedor-carrito")

abrirCarrito.addEventListener("click", ()=>{
    modalContenedor.classList.toggle("modal-active")
} )

cerrarCarrito.addEventListener("click", ()=>{
    modalContenedor.classList.remove("modal-active")
})

modalContenedor.addEventListener("click", ()=>{
    cerrarCarrito.click()
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation()
})

