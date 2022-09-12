const mainSection = document.getElementById("main__section");
const asideGenero = document.getElementById("aside__genero");
const asideMarca = document.getElementById("aside__marca");
const asideTalle = document.getElementById("aside__talle");
const asidePrecio = document.getElementById("aside__precio");
const asideGeneroUL = document.getElementById("aside__genero__ul");
const asideMarcaUL = document.getElementById("aside__marca__ul");
const asideTalleUL = document.getElementById("aside__talle__ul");
const asidePrecioForm = document.getElementById("aside__precio__form");

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
    alert(`Se agrego el producto ${producto.nombre} al carrito`);
  }
  )
});

asideGenero.addEventListener("click",()=>{
  asideGeneroUL.classList.toggle("aside-active");
});

asideMarca.addEventListener("click",()=>{
  asideMarcaUL.classList.toggle("aside-active");
});

asideTalle.addEventListener("click",()=>{
  asideTalleUL.classList.toggle("aside-active");
});

asidePrecio.addEventListener("click",()=>{
  asidePrecioForm.classList.toggle("aside-active");
});