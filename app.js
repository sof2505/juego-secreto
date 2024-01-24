
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log (numeroSecreto);
    console.log (numeroDeUsuario);
    console.log (numeroDeUsuario === numeroSecreto);*/
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el número. \n El número de intentos fue: ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor.')
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor.')
        }
        intentos ++ ;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
     /*
    ó
    document.querySelector('#valorUsuario').value = '';*/
    
}
   

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    //Si ya se sortearon todos los codigos
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles.')
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            console.log (listaNumerosSorteados);
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log (listaNumerosSorteados)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del Número Secreto ' )
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}.`)
    intentos = 1;
    numeroSecreto=generarNumeroSecreto ();
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el botón de juego
    //Inicializar el nuevo número de intentos.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();






//Ejercicio extra 1
/*function mostrarHola() {
    console.log("¡Hola, mundo!");
  }
  
  mostrarHola();

*/


//Ejercicio extra 2
/*function mostrarHola(nombre) {
    console.log (`Hola ${nombre}!`);
}

mostrarHola('Sofía');
*/


//Ejercicio extra 3
/*function calcularDoble(numero){
    return numero*2;
}
let resultado = calcularDoble(5);
console.log(`El doble de 5 es: ${resultado}`);
*/


//Ejercicio extra 4
/*function promedio(n1,n2,n3) {
    return (n1 + n2 + n3)/3    
}
let promediotot = promedio(21, 15, 9);
console.log (`El promedio es = ${promediotot}`);
*/


//Ejercicio extra 5
/*function valorMayor(n1,n2) {
    if (n1 < n2){
        return n2;
    } else {
        return n1;
    }
}
let Mayor = valorMayor(65, 34);
console.log (`El número mayor entre 23 y 34 es: ${Mayor}`);
*/


//Ejercicio extra 6
/*function cuadrado(numero) {
    return numero * numero;
  }
let resultado = cuadrado(9);
console.log(resultado);
*/


//Ejercicio extra 7
/*function calcularIMC(){
    let peso= prompt("¿Cuál es tu peso?");
    let altura = prompt("Cuál es tu altura?");
    var imc = peso / (altura*altura);
    console.log (imc);
}
calcularIMC();
*/


//Ejercicio extra 8
/*function calcularFactorial (numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        //Se va restando 1 a cada vuelta y se va multiplicando por el número.
        return numero * calcularFactorial(numero - 1);
    }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
*/


//Ejercicio extra 9
/*function convertirDolaresReales (dolares){
    const cotizacionDolares = 4.80;
    var reales = dolares * cotizacionDolares;
    return reales;
}

let dolares = 50;
let valorReal = convertirDolaresReales(dolares);
console.log (`${dolares} dólares son equivalentes a ${valorReal}`);
*/


//Ejercicio extra 10
/*function calcularPerimetroArea (alto, ancho){
    var area = alto * ancho;
    var perimetro = 2* (alto + ancho);
    console.log (" Àrea: " + area);
    console.log (" Perimetro: " + perimetro);
}
let alto = 15;
let ancho = 10;
calcularPerimetroArea(alto,ancho);
*/


//Ejercicio extra 11
/*function calcularPerimetroArea (radio){
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log (" Àrea: " + area);
    console.log (" Perimetro: " + perimetro);
}

let radio = 4;
calcularPerimetroArea(radio);
*/



//Ejercicio extra 12
/*function tablaMultiplicar (numero){
    for (var i=1;i<=10;i++){
        var resultado = numero * i;
        console.log ( numero + "x" + i + "=" + resultado);
    }
}
tablaMultiplicar(7);
*/

/*
//Ejercicio extra 13
let listaGenerica = [];
let lenguajesProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesProgramacion.push('Java', 'Ruby', 'GoLang');
//Mostrar toda la lista de Progra
function mostrarLenguajesProgra() {
    for (let i=0; i < lenguajesProgramacion.length; i++){
        console.log (lenguajesProgramacion[i]);
    }
}

mostrarLenguajesProgra();

//Mostrar lenguajes de Progra de forma reversa
function mostrarLenguajesPrograReversa() {
    for (let i= lenguajesProgramacion.length - 1 ; i>=0 ; i-- ){
        console.log (lenguajesProgramacion [i]);
    }
}
mostrarLenguajesPrograReversa();

//Mostrar la media de la lista de Progra
function calculcarMedia(lista) {
    let suma = 0;
    for (let i = 0 ; i < lista.length ; i++){
        suma += lista[i];
    }
    return suma/ lista.length;    
}
let numeros = [10, 20, 30, 40, 50];
let media = calculcarMedia(numeros);
console.log("La Media es: "+ media);



//Mostrar el número mayor y el menor de la lista
function buscarMayorYMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1 ; i< lista.length; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
        if (lista[i] < menor){
            menor = lista[i];
        }
    }

    console.log('Mayor: ', mayor);
    console.log('Menor: ', menor);
}
let numeros = [15, 8, 25, 5, 12];
buscarMayorYMenor(numeros);



//Suma de elementos de la lista.
function calcularSumaLista(lista){
    let suma = 0;
    for (let i=0 ; i < lista.length ; i++){
        suma+= lista[i];
    }
    return suma;
}
let numeros = [15, 8, 25, 5, 12];
let suma = calcularSumaLista(numeros);
console.log ('Suma: ' +  suma);


function encontrarIndiceElemento(lista, elemento){
    for (let i = 0 ; i < lista.length ; i++ ){
        if (lista[i] === elemento){
            return i;
        }
    }
    return -1;
}
*/
