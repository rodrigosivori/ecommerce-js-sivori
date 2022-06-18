//const valorTotal = [];
let carritoDatos = [];
let precioTotal = [];

// funcion que me permitira el ingreso de los datos

function carritoTotal(){
    function Carrito(producto, precio){
        this.producto = producto;
        this.precio = precio;
    }

    let productoNuevo = prompt('producto');
    let precioNuevo = parseFloat(prompt('precio'));

    total = new Carrito (productoNuevo, precioNuevo)

    pushearInformacion(); //llama a la funcion de pusheo
}


//funcion que pushea los datos al carrito y tambien juntara solo el valor de precio para mas abajo sumarlos

function pushearInformacion() {
    precioTotal.push(total.precio);    
    carritoDatos.push(total);
    console.log(total);
}

//console.log(carritoDatos);


// Declaracion de cantidad para el setear el ciclo de preguntas

let cantidad = parseFloat(prompt('cantidad'))

for (let i = 0 ; i < cantidad ; i++){ 
   
    carritoTotal()
    
    
}

//declaracion y ciclo para la SUMA
let suma = 0;
for (let i = 0; i < precioTotal.length; i++) {
    suma += precioTotal[i]
}


    // console.log(precioTotal); //Esto me muestra los valores por separado
    console.log ('El total de productos es: ' + cantidad)
    console.log( 'El valor total de los productos es: $' +suma); // mostrara la suma de la propiedad precio 




// CALCULADO DE CUOTAS. RESULTADO EN CONSOLA.

// Declaracion del producto que se le hara el calculo de cuotas (sera el resultado del carrito anterior), y se declara mediante un prompt las cuotas.
// Tambien se declara un mensaje predeterminado

let precioProducto = suma;
let cantidadCuo = prompt("Cuotas (3, 6, 9, o 12): ")
let mensajito = "El total con recargo es: ";

//Declaracion de funciones para las cuotas correspondientes

function tresCuotas(tresCuo){
    let totalEs = tresCuo * 1.05;
    let cuotasEs = totalEs / 3;
    console.log(mensajito + totalEs);
    console.log("3 cuotas de: " + cuotasEs);
}

function seisCuotas(seisCuo){
    let totalEs = seisCuo * 1.10;
    let cuotasEs = totalEs / 6;
    console.log(mensajito + totalEs);
    console.log("6 cuotas de: " + cuotasEs);
}

function nueveCuotas(nueveCuo){
    let totalEs = nueveCuo * 1.18;
    let cuotasEs = totalEs / 9;
    console.log(mensajito + totalEs);
    console.log("9 cuotas de: " + cuotasEs);
}

function doceCuotas(doceCuo){
    let totalEs = doceCuo;
    let cuotasEs = totalEs / 12;
    console.log(mensajito + totalEs);
    console.log("Ahora 12!! Cuotas de: " + cuotasEs);
}


switch(cantidadCuo){
    case "3":
        tresCuotas(precioProducto);
        break;
    case "6":
        seisCuotas(precioProducto);
        break;
    case "9":
        nueveCuotas(precioProducto);
        break;
    case "12":
        doceCuotas(precioProducto);
        break;
    default:
        alert("Por favor, elija entre 3, 6, 9 y 12 cuotas. Muchas gracias.");
        break;
}        
        

// EN EL SWITCHEO PODRIA REEMPLAZAR PRECIOPRODUCTO DIRECTAMENTE POR LA VARIABLE SUMA, PERO QUISE MANTENER POR SEPARADO LA PARTE DE SUMAR PRODUCTOS Y DE CALCULAR CUOTAS.