const contenedorCarrito = document.getElementById("contenedor-productos");
const modalContenedor = document.querySelector(".header__nav__div__div__div")
const abrirCarrito = document.getElementById("abrir")
const cerrarCarrito = document.getElementById("cerrar")
const modalCarrito = document.querySelector("#contenedor-carrito")
const carritoDeCompras = [];
const traeCarrito = () => {
	const carritoEnLocal = JSON.parse(localStorage.getItem('carrito')); 
	carritoDeCompras.splice(0,carritoDeCompras.length)
  carritoEnLocal.forEach((producto)=>carritoDeCompras.push(producto));
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
  contenedorCarrito.innerHTML="";
  carritoDeCompras.forEach((producto) => {
  let div = document.createElement("div")
  div.classList.add("productoEnCarrito")
  div.classList.add("removerProducto")
  const subtotal = producto.precio*producto.cantidadVendida;
	div.innerHTML = `<div id="${producto.id}"}><img src="${producto.imagen}" alt="${producto.nombre}" 	class="imagenProductoEnCarrito"></div>
									<div><p>${producto.nombre}</p>
									<p>Precio: $${producto.precio}</p> 
									<p id="cantidad${producto.id}">Cantidad: ${producto.cantidadVendida}</p>
									<p>Subtotal: $${subtotal}
									<button id="${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can" ></i></button></div>`;
	contenedorCarrito.appendChild(div)
        });
    totalizar();
};
const vaciaCarrito = () => {
	if (carritoDeCompras.length===0){
		Swal.fire({
			title:'El carrito ya estaba vacío',
			showConfirmButton: false,
			timer: 1500
		})
	}else{
		Swal.fire({
			title: '¿Seguro que quieres Vaciar el Carrito?',
			showDenyButton: true,
			confirmButtonText: 'Aceptar',
			denyButtonText: `Cancelar`,
		}).then((result) => {
			if (result.isConfirmed) {
				carritoDeCompras.splice(0,carritoDeCompras.length)
				actualizaCarrito();
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: `Carrito vacío.`,
					showConfirmButton: false,
					timer: 1000
				});  
			}; 
		})
	}   
}
const productosEnCarrito = document.getElementById("contenedor-productos");
const eliminaProductoDelCarrito = (productoId) => {
	const productoABorrar = carritoDeCompras.find( producto => producto.id == productoId );
	let indice  = productos.indexOf(productoABorrar);
	carritoDeCompras.splice(indice,1);
	actualizaCarrito();
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: `Se eliminó el producto ${productoABorrar.nombre.toUpperCase()} del carrito.`,
		showConfirmButton: false,
		timer: 1000
	});  
};

const botonVaciarCarrito = document.getElementById('vaciarCarrito');
botonVaciarCarrito.addEventListener("click",vaciaCarrito);

(()=>{
	!localStorage.getItem('carrito') ? localStorage.setItem('carrito','[]') : traeCarrito(); 
	actualizaCarrito();
})();

const cargarAlCarrito = (productoId)=>{
	const contenedorCarrito = document.getElementById("contenedor-productos")
	const agregaProductosCarrito = ()=> {
		if(carritoDeCompras.some((el) => el.id === productoId)){
			carritoDeCompras.forEach((productoEnCarrito) =>{
				if (productoEnCarrito.id===productoId){
					productoEnCarrito.cantidadVendida++;
					const productoAModificar = document.getElementById("cantidad"+productoId);
					productoAModificar.innerHTML= `Cantidad: ${productoEnCarrito.cantidadVendida}`;
					actualizaCarrito();
				}
			})
		}else{
			let producto  = productos.find( producto => producto.id == productoId );
			carritoDeCompras.push(producto);
			actualizaCarrito();
		};
	};
	agregaProductosCarrito()
}

contenedorCarrito.addEventListener("click",(e)=>{eliminaProductoDelCarrito(e.target.id)})
abrirCarrito.addEventListener("click", (e)=>{
	e.stopPropagation();
	modalContenedor.classList.toggle("modal-active");
} )

cerrarCarrito.addEventListener("click", (e)=>{
	e.stopPropagation();
	modalContenedor.classList.remove("modal-active")
})

