// DECLARO VARIABLES CONECTANDOLO CON LOS INPUT DEL HTML
const carrito = document.querySelector('form');
const producto1 = document.getElementById('producto1');
const precio1 = document.getElementById('precio1');

// DOY LA ORDEN CUANDO ESCUCHA AL BOTON, LLAME A UNA FUNCION
carrito.addEventListener('submit', e => {
    e.preventDefault();
    
    carritoTotal()

    //console.log(producto1.value);
    //console.log(precio1.value);
  
});


//const valorTotal = [];
let carritoDatos = [];
let precioTotal = [];

// funcion que me permitira el ingreso de los datos
function carritoTotal(){
    function Carrito(producto, precio){
        this.producto = producto;
        this.precio = precio;
    }
    
    let productoNuevo = producto1.value;
    let precioNuevo = precio1.value;
    
    total = new Carrito (productoNuevo, precioNuevo)
    
    pushearInformacion(); //llama a la funcion de pusheo
    
    // Aca creo una card para mostrar el producto y el precio elegido, una por producto.
    let productoAgregado = document.createElement('cadaproducto');
    
    productoAgregado.innerHTML = 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Producto: ${productoNuevo}</h5>
    <p class="card-text">Valor: $${precioNuevo}</p>
    </div>
    </div>`
    
    document.body.appendChild(productoAgregado);
}


//funcion que pushea los datos al carrito y tambien juntara solo el valor de precio para mas abajo sumarlos

function pushearInformacion() {
    precioTotal.push(total.precio);    
    carritoDatos.push(total);
    console.log(total);
    // console.log(precioTotal);
    
}

// NO PUEDO REALIZAR LA SUMA.....
let suma = 0;
for (let i = 0; i < precioTotal.length; i++) {
    suma += precioTotal[i]

    console.log(suma);
}
//console.log(precioTotal);


let precioProducto = suma;

// CON ESTE BOTON PIDO QUE ME DIGA EL TOTAL DE LOS PRODUCTOS

document.getElementById('listo').onclick = function() {final()};

function final() {
    let contenedorTotal = document.createElement('totalidad');
    
    contenedorTotal.innerHTML = 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">TOTAL A PAGAR</h5>
    <p class="card-text">El total a pagar (sin recargo) es de: $ ${precioProducto} </p>
    </div>
    </div>`
    
    document.body.appendChild(contenedorTotal); 
    
}