
// DECLARO VARIABLES CONECTANDOLO CON LOS INPUT DEL HTML
const carrito = document.querySelector('form');
const producto1 = document.getElementById('producto1');
const precio1 = document.getElementById('precio1');


// Funcion para limpiar los inputs luego del click agregar
function limpiar() {
    document.getElementById("precio1").value = "";
    document.getElementById("producto1").value = "";
}


 

// DOY LA ORDEN CUANDO ESCUCHA AL BOTON, LLAME A UNA FUNCION
carrito.addEventListener('submit', e => {
    e.preventDefault();
    
    //como hago para que si el valor es true, espere al click?, mientras resolvi de otra forma..
    // Avisara en caso que de precio sea 0 o nulo, o que falte aclarar el producto.
    producto1.value || alert('ATENCION, olvido agregar el PRODUCTO');
    precio1.value || alert('ATENCION, olvido agregar el PRECIO');
    
    precio1.value || (precio1.value = 0); // si no ingresa valor, este definira 0 para no afectar en la suma posteriormente
    producto1.value || (producto1.value = 'No define'); // 'NO DEFINE', para no dejar vacio el campo.
    
    
    
    carritoTotal()
    limpiar()
    
    //console.log(producto1.value);
    //console.log(precio1.value);
    
});


//const valorTotal = [];
//let carritoDatos = [];
let precioTotal = [];


// funcion que me permitira el ingreso de los datos
function carritoTotal(){
    function Carrito(producto, precio){
        this.producto = producto;
        this.precio = parseInt(precio);
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

    //declaro abreviacion para localStorage a modo prueba
    let ls = localStorage; 
    
    //agregar info en storage
    ls.setItem("producto", productoNuevo)
    ls.setItem("precio", precioNuevo)

    //recupero datos del storage en consola    
    console.log(ls.getItem("producto") + ' vale $' + ls.getItem("precio"));
 
}


//funcion que pushea los datos al carrito y tambien juntara solo el valor de precio para mas abajo sumarlos

function pushearInformacion() {
    precioTotal.push(total.precio);    
    console.log(total);
    //carritoDatos.push(total);
    //console.log(precioTotal);
    //console.log(carritoDatos);
}


// Declaracion de suma: 

const sumaTotal = (accumulator, curr) => accumulator + curr;



// funcion para el total:

function final() {
    let contenedorTotal = document.createElement('totalidad');
    let sumaFinal = precioTotal.reduce(sumaTotal);
    
    contenedorTotal.innerHTML = 
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">TOTAL A PAGAR</h5>
    <p class="card-text">El total a pagar (sin recargo) es de: $ ${sumaFinal} </p>
    </div>
    </div>`
    
    document.body.appendChild(contenedorTotal); 
    
        
    console.log('El total es: $' + sumaFinal);
    
    
}

// CON ESTE BOTON PIDO QUE ME DIGA EL TOTAL DE LOS PRODUCTOS
document.getElementById('listo').onclick = function() {final()};



