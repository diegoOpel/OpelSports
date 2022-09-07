
class Producto{
  constructor(id,nombre,precio,color,talle,marca,deporte,genero,stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.talle = talle;
    this.marca = marca;
    this.deporte = deporte;
    this.genero = genero;
    this.stock = stock;
    this.cantidadVendida = 0;
    this.precioTotal = 1;
  };
  vender = (cantidad) =>{
    if(cantidad>this.stock){
        alert(`No hay stock suficiente de ${this.nombre}`);
    }else{
        carrito.push(this);
        carrito[carrito.length-1].cantidadVendida=cantidad;
        carrito[carrito.length-1].precioTotal= this.precio*cantidad; 
        this.stock-=cantidad;
    };
  };
  agregarStock = cantidad => {
    this.stock += cantidad;
    alert(`Ahora hay ${this.stock} unidades de ${this.nombre}`);
}
};

const productos = [];
let carrito = [];

const eliminaProductoCarrito = (productoABorrar) => {
  productos[carrito[productoABorrar].id].stock += carrito[productoABorrar].cantidadVendida;
  carrito.splice(productoABorrar, productoABorrar +1);};


const eliminaCarrito = () => {
  carrito = [];
  menu();
};
const finalizaCompra = () => {
  alert("Gracias por tu compra!");
  eliminaCarrito();
}; 
const muestraCarrito = () => {
  if(carrito.length===0){
    alert("No hay productos para mostrar");
    return;
  }else{
      alert("Los siguientes son los productos disponibles en tu carrito de compras:")
      for(let producto of carrito){
          alert(`PRODUCTO: ID:${producto.id} - NOMBRE: ${producto.nombre.toUpperCase()} - COLOR: ${producto.color} - MARCA: ${producto.marca} - TALLE: ${producto.talle} - GENERO ${producto.genero} - PRECIO UNITARIO: ${producto.precio} - PRECIO TOTAL: ${producto.precioTotal} - CANTIDAD: ${producto.cantidadVendida}`);
      };
      const precios = carrito.map((el) => el.precioTotal);
      const total = precios.reduce((acc, el) => acc + el,0);
      alert(`Importe acumulado: ${total}`);
      let opcionCarrito = parseInt(prompt("Que deseas hacer a continuación: \n 1-Finalizar mi compra \n 2-Eliminar un producto del carrito"));
      switch(opcionCarrito){
        case 1:
          finalizaCompra();
          break;
        case 2:
          let productoABorrar = parseInt(prompt("Que producto deseas eliminar? Ingresa el ID"));
          eliminaProductoCarrito(productoABorrar);
          alert("Producto borrado con éxito");
          menu();
          break;
        default:
          alert("Opción no válida, serás regresado al menú principal");
          menu();
          break;
      };
  };
};

const sumaProducto = () => {
  let repetidor = parseInt(prompt("Cuantos productos distintos quieres agregar?"));
  for(let i = 0;i<repetidor;i++){
      let nombre = prompt("Ingresa el nombre del producto");
      let color = prompt("Ingresa el color del producto ");
      let talle = prompt("Ingresa el talle del producto");
      let marca = prompt("Ingresa la marca del producto");
      let genero = prompt("¿Es un producto de mujer, hombre, unisex o niño?");
      let deporte = prompt("Ingresa el o los deportes en que el producto se puede usar");
      let precio = parseFloat(prompt(`Ingresa el precio del producto: ${nombre}:`));
      let stock = parseInt(prompt(`Ingresa el stock del producto en este talle: ${nombre}:`));
      const producto = new Producto(productos.length,nombre,precio,color,talle,marca,deporte,genero,stock);
      productos.push(producto);
};
};

const muestraProductos = () => {
  if(productos.length===0){
      alert("No hay productos para mostrar");
      return;
  }else{
      for(let producto of productos){
          alert(`PRODUCTO: ID:${producto.id} - NOMBRE: ${producto.nombre.toUpperCase()} - COLOR: ${producto.color} - MARCA: ${producto.marca} - TALLE: ${producto.talle} - GENERO ${producto.genero} - PRECIO: ${producto.precio} - STOCK ACTUAL: ${producto.stock}`);
      };
  };
};

const compraProductos = () => {
  if(productos.length===0){
      alert("No hay productos para comprar");
      return;
  }else{
      alert("Te mostraremos los productos disponibles para comprar");
      muestraProductos();
      let id = parseInt(prompt("Que producto quieres agregar al carrito? Ingresá el ID"));
      let cantidad = parseInt(prompt(`Cuantos ${productos[id].nombre} deseas agregar al carrito?`));
      productos[id].vender(cantidad);
      let menuCompra = parseInt(prompt("¿Qué deseas hacer? \n 1-Ver el carrito y finalizar mi compra \n 2-Seguir comprando \n 3-Eliminar un producto del carrito \n 4-Volver al Menú"));
      switch(menuCompra){
        case 1:
          muestraCarrito();
          break;
        case 2:
          compraProductos();
          break;
        case 3:
          let productoABorrar = parseInt(prompt("Que producto deseas eliminar? Ingresa el ID"));
          eliminaProductoCarrito(productoABorrar);
          alert("Producto borrado con éxito");
          menu();
          break;
        case 4:
          menu();
          break;
        default:
          alert("Opción no válida, serás regresado al menú principal");
          menu();
          break;          
      }
  };
};

const sumaStock = () => {
  if(productos.length===0){
      alert("No hay productos para stockear");
      return;
  }else{
      alert("Te mostraremos los productos disponibles para sumar stock");
      muestraProductos();
      let id = parseInt(prompt("Que producto quieres stockear? Ingresá el ID"));
      let cantidad = parseInt(prompt("Cuantos productos se agregarán al stock?"));
      productos[id].agregarStock(cantidad);
  };
};

const eliminaProductos = () => {
  if(productos.length===0){
      alert("No hay productos para eliminar");
      return;
  }else{
      alert("Te mostraremos los productos disponibles para eliminar");
      muestraProductos();
      let id = parseInt(prompt("Que producto quieres eliminar? Ingresá el ID"));
      productos.splice(id, id+1);
      alert("Se ha eliminado el producto con éxito");
  }; 
};
const menu = () => {
  let opcion = parseInt(prompt("Elige entre estas opciones (ingresa un número): \n 1-Sumar un producto nuevo. \n 2-Sumar stock a un producto existente \n 3-Ver los productos disponibles \n 4-Comprar productos \n 5-Eliminar un producto existente \n 6-Ver el carrito de compras \n"));
  switch(opcion){
      case 1:
          sumaProducto();
          break;
      case 2:
          sumaStock();
          break;
      case 3:
          muestraProductos();
          break;
      case 4:
          compraProductos();
          break;
      case 5:
          eliminaProductos();
          break;
      case 6:
          muestraCarrito();
          break;
      default:
          alert("Opción no válida");
          break;
  };
};
const continuar = () =>{
  let loopeador = prompt("¿Deseas volver al Menú? S/N");
  if (loopeador.toLowerCase() === "s"){
      return true;
  }else if(loopeador.toLowerCase() === "n"){
      return false;
  }else {
      alert("Ingrese un valor válido S o N");
      continuar();
  };
};
do{
  menu();
}while(continuar());