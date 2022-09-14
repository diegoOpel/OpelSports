const filtrador = (genero) => {
  resultado = productos.filter((producto) => producto.genero.toLowerCase().includes(genero));
  mainSection.innerHTML = "";
  resultado.forEach((resultado) => {
    const article = document.createElement("article");
    const div = document.createElement("div");
    let tamanios = resultado.talle.forEach((tamanio) =>{
      const botonTalle = document.createElement("button");
      botonTalle.className ="botonTalle";
      botonTalle.innerText = tamanio;
      div.appendChild(botonTalle);});
    div.className = "divTalle";
    article.innerHTML = `
    <img src="${resultado.imagen}" alt="${resultado.nombre}" class="imagenProducto">
    <h3 class="tituloProducto">${resultado.nombre.toLocaleUpperCase()}</h3>
    <b class="precioProducto">$ ${resultado.precio}</b>
    <p>Talles</p> ${div.innerHTML}
    <button type="button" class="botonCargaCarrito" id="boton${resultado.id}">Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></button>
    `;
    mainSection.appendChild(article);
    const boton = document.getElementById(`boton${resultado.id}`);
    boton.addEventListener("click", ()=>{
    cargarAlCarrito(resultado.id);
    alert(`Se agrego el producto ${resultado.nombre} al carrito`);});
  })
};
const filtraPorHombre = () => {
  filtrador("hombre");
};
const filtraPorMujer = () => {
  filtrador("mujer");
};

const filtraPorNinio = () => {
  filtrador("ninio");
};
const filtraPorOferta = () => {
  const resultado = productos.filter((producto) => producto.oferta === true);
  mainSection.innerHTML = "";
  resultado.forEach((resultado) => {
    const article = document.createElement("article");
    const div = document.createElement("div");
    let tamanios = resultado.talle.forEach((tamanio) =>{
      const botonTalle = document.createElement("button");
      botonTalle.className ="botonTalle";
      botonTalle.innerText = tamanio;
      div.appendChild(botonTalle);});
    div.className = "divTalle";
    article.innerHTML = `
    <img src="${resultado.imagen}" alt="${resultado.nombre}" class="imagenProducto">
    <h3 class="tituloProducto">${resultado.nombre.toLocaleUpperCase()}</h3>
    <b class="precioProducto">$ ${resultado.precio}</b><p class="precioAnterior">$ ${resultado.precioAnterior}</p>
    <p>Talles</p> ${div.innerHTML}
    <button type="button" class="botonCargaCarrito" id="boton${resultado.id}">Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></button>
    `;
    mainSection.appendChild(article);
    const boton = document.getElementById(`boton${resultado.id}`);
    boton.addEventListener("click", ()=>{
    cargarAlCarrito(resultado.id);
    alert(`Se agrego el producto ${resultado.nombre} al carrito`);});
})
};
let resultado = [];

let navHombre = document.getElementById("nav__hombre");
navHombre.addEventListener("click",filtraPorHombre);

let navMujer = document.getElementById("nav__mujer");
navMujer.addEventListener("click",filtraPorMujer);

let navNinio = document.getElementById("nav__ninio");
navNinio.addEventListener("click",filtraPorNinio);

let navOferta = document.getElementById("nav__oferta");
navOferta.addEventListener("click",filtraPorOferta);

const inputBuscar = document.getElementById("inputBuscar");
const botonBuscar = document.getElementById("botonBuscar");

const buscador = () =>{
  let busqueda = inputBuscar.value;
  const resultado = productos.filter((producto) => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  mainSection.innerHTML = "";
  resultado.forEach((resultado) => {
    const article = document.createElement("article");
    const div = document.createElement("div");
    let tamanios = resultado.talle.forEach((tamanio) =>{
      const botonTalle = document.createElement("button");
      botonTalle.className ="botonTalle";
      botonTalle.innerText = tamanio;
      div.appendChild(botonTalle);});
    div.className = "divTalle";
    article.innerHTML = `
    <img src="${resultado.imagen}" alt="${resultado.nombre}" class="imagenProducto">
    <h3 class="tituloProducto">${resultado.nombre.toLocaleUpperCase()}</h3>
    <b class="precioProducto">$ ${resultado.precio}</b>
    <p>Talles</p> ${div.innerHTML}
    <button type="button" class="botonCargaCarrito" id="boton${resultado.id}">Agregar al carrito <i class="fa-solid fa-cart-shopping"></i></button>
    `;
    mainSection.appendChild(article);
    const boton = document.getElementById(`boton${resultado.id}`);
    boton.addEventListener("click", ()=>{
    cargarAlCarrito(resultado.id);
    alert(`Se agrego el producto ${resultado.nombre} al carrito`);});
})}
 
botonBuscar.addEventListener("click",buscador);

