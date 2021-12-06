let carrito=[];

function agregarCarrito(productoQueAgrego){
    carrito.push(productoQueAgrego);
    document.getElementById("productosSeleccionados").innerHTML= carrito.map(producto => producto.name);

}


