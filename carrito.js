let carritoDeCompras = [];
const traeCarrito = () => {
    carritoDeCompras = JSON.parse(localStorage.getItem('carrito'));
};

const totalizar = () => {
    let total = document.getElementById("total");
    total.innerHTML ="";
    const totalizado = carritoDeCompras.reduce((acc,el) => acc + (el.precio*el.cantidadVendida),0)
    let p = document.createElement("p");
    p.innerText = `Total: $${totalizado}`;
    total.appendChild(p);

}
const actualizaCarrito = () => {
    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras));
    const contenedorCarrito = document.getElementById("contenedor-productos");
        contenedorCarrito.innerHTML="";
        carritoDeCompras.forEach((producto) => {
            let div = document.createElement("div")
            div.classList.add("productoEnCarrito")
            div.classList.add("removerProducto")
            const subtotal = producto.precio*producto.cantidadVendida;
            div.innerHTML = `<div id="${producto.id}"}><img src="${producto.imagen}" alt="${producto.nombre}" class="imagenProductoEnCarrito"></div>
                        <div><p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidadVendida}</p>
                        <p>Subtotal: $${subtotal}
                        <button id="eliminar" class="boton-eliminar" onClick="eliminaProductoDelCarrito(${producto.id})"><i class="fa-solid fa-trash-can" ></i></button></div>`;
            contenedorCarrito.appendChild(div)
        });
    totalizar();
};
const vaciaCarrito = () => {
    carritoDeCompras = [];
    actualizaCarrito();
    
}
const productosEnCarrito = document.getElementById("contenedor-productos");
const eliminaProductoDelCarrito = (productoId) => {
    const productoABorrar = carritoDeCompras.find( producto => producto.id == productoId );
    let indice  = productos.indexOf(productoABorrar);
    carritoDeCompras.splice(indice,1);
    actualizaCarrito();
    
};

const botonVaciarCarrito = document.getElementById('vaciarCarrito');
botonVaciarCarrito.addEventListener("click",vaciaCarrito);

(()=>{
    if(!localStorage.getItem('carrito'))
    {localStorage.setItem('carrito','[]')
    }else{
        traeCarrito();
        actualizaCarrito();
    };
})();

const cargarAlCarrito = (productoId)=>{
    const contenedorCarrito = document.getElementById("contenedor-productos")

    const agregaProductosCarrito = ()=> {
        if(carritoDeCompras.some((el) => el.id === productoId)){
            carritoDeCompras.forEach((productoEnCarrito) =>{
                if (productoEnCarrito.id===productoId){
                    productoEnCarrito.cantidadVendida+=1;
                    const productoAModificar = document.getElementById("cantidad"+productoId);
                    productoAModificar.innerHTML= `Cantidad: ${productoEnCarrito.cantidadVendida}`;
                    actualizaCarrito();
                }
            })
        }else{
            let producto  = productos.find( producto => producto.id == productoId );
            carritoDeCompras.push(producto);
            actualizaCarrito();
        }


        
    }

    agregaProductosCarrito()
}

const modalContenedor = document.querySelector(".header__nav__div__div__div")
const abrirCarrito = document.getElementById("abrir")
const cerrarCarrito = document.getElementById("cerrar")
const modalCarrito = document.querySelector("#contenedor-carrito")

abrirCarrito.addEventListener("click", (e)=>{
    e.stopPropagation();
    modalContenedor.classList.toggle("modal-active");
} )

cerrarCarrito.addEventListener("click", (e)=>{
    e.stopPropagation();
    modalContenedor.classList.remove("modal-active")
})



