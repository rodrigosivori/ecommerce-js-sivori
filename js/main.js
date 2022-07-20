
// DECLARO VARIABLES CONECTANDOLO CON LOS INPUT DEL HTML
const carrito = document.querySelector('form');
const producto1 = document.getElementById('producto1');
const precio1 = document.getElementById('precio1');

//declaro abreviacion para localStorage a modo prueba
let ls = localStorage; 


// Funcion para limpiar los inputs luego del click agregar
function limpiar() {
    document.getElementById("precio1").value = "";
    document.getElementById("producto1").value = "";
}



// DOY LA ORDEN CUANDO ESCUCHA AL BOTON, LLAME A UNA FUNCION
carrito.addEventListener('submit', e => {
    e.preventDefault();
    
    //Utilizo el IF de abajo para evitar que sea ingresado el valor 0. Ademas en el html utilizo 'REQUIRED' para que se completen los campos.
    precio1.value === '0' ? 
    
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'ATENCION!<br>EL PRECIO ES INCORRECTO',
        text: 'Por favor revise los datos, y vuelva a ingresarlos',
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 2500
    }) : carritoTotal(), limpiar();
    
    
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
    
    
    
    //agregar info en storage
    ls.setItem("producto", productoNuevo)
    ls.setItem("precio", precioNuevo)
    
    //recupero datos del storage en consola    
    console.log(ls.getItem("producto") + ' vale $' + ls.getItem("precio"));
    


// me da error 405, pero cuando en INSPECCIONAR voy a RED, se crean los data.json correctamente

    let retotal = JSON.stringify(total);
    
    peticion = {
        method: 'POST',
        body: retotal,
    }
    fetch('./JSON/data.json', peticion)
    .then(respuesta => respuesta.json)
    .then(respuesta =>{
        
    }).catch(error => console.log('error', error))
}




//funcion que pushea los datos al carrito y tambien juntara solo el valor de precio para mas abajo sumarlos

function pushearInformacion() {
    precioTotal.push(total.precio);    
    console.log(total);
    //carritoDatos.push(total);
    //console.log(precioTotal);
    //console.log(carritoDatos);
}


// Declaracion de funcion suma: 

const sumaTotal = (accumulator, curr) => accumulator + curr;



// funcion para el total:

function final() {
    
    // IF con Alerta por si finaliza sin ingresar productos.
    precioTotal === '0' ||
    
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'ATENCION!<br>EL CARRITO ESTA VACIO',
        text: 'Por favor ingrese los productos y sus precios',
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 2500
    });

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

    //Alerta desde libreria con el precio total
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'El total es de $' + sumaFinal,
        text: 'Sera redirigido automaticamente para finalizar la compra',
        showConfirmButton: true,
        timerProgressBar: true,
        timer: 3500
      })
    

    //Seteo el precio total en el localStorage
    ls.setItem("Precio total", sumaFinal)
    

    
}


// CON ESTE BOTON PIDO QUE ME DIGA EL TOTAL DE LOS PRODUCTOS
document.getElementById('listo').onclick = function() {final()};



