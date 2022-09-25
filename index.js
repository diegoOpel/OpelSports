const mainSection = document.getElementById("main__section");

productos.forEach((producto) => {
  const article = document.createElement("article");
  const div = document.createElement("div");
  let tamanios = producto.talle.forEach((tamanio) =>{
    const botonTalle = document.createElement("button");
    botonTalle.className ="botonTalle";
    botonTalle.innerText = tamanio;
    div.appendChild(botonTalle);});
  div.className = "divTalle";
  article.innerHTML = `
  <img src="${producto.imagen}" alt="${producto.nombre}" class="imagenProducto">
  <h3 class="tituloProducto">${producto.nombre.toLocaleUpperCase()}</h3>
  <b class="precioProducto">$ ${producto.precio}</b>
  <p>Talles</p> ${div.innerHTML}
  <button type="button" class="botonCargaCarrito" id="boton${producto.id}">Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></button>
  `;
  mainSection.appendChild(article);
  const boton = document.getElementById(`boton${producto.id}`);
  boton.addEventListener("click", ()=>{
    cargarAlCarrito(producto.id);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Se agrego el producto ${producto.nombre.toUpperCase()} al carrito.`,
      showConfirmButton: false,
      timer: 1500
    })
  }
  )
});



