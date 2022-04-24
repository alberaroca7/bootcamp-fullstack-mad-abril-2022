//1. Crea un programa que dado un numero mediante promt y usando el bucle for, te impirma por pantalla su tabla de multiplicar de la siguiente forma:
// Tabla de multiplicar de 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// let n = parseInt(prompt('Introduce un número'));

// for(let i=1; i<=10; i++){

//     document.write(`<p>${n} x ${i} = ${n * i}</p>`);
// }

//2. Crear una página web que pinte por pantalla separado por comas las primeras 100 potencias de dos. Ejemplo: 1,2,4,8,16,32,64,...

// let x = 2;

// for(let i=1; i<=101; i++){

//     document.write(`<span>${x**i},</span>`);
// }

// 3.Crea un programa que recorra los números del 1-100 e imprima por pantalla :
//         Fizz, si es multiplo de 3.
//         Buzz, si es múltiplo de 5.
//         FizzBuzz, si es múltiplo de 3 y 5 a la vez.


// for(let i=1; i<=101; i++){

//     if(i%3 === 0){
//        document.write('Fizz, '); 
//     }

//     if(i%5 === 0){
//         document.write('Buzz, '); 
//     }

//     if(i%3 === 0 && i%5 === 0){
//         document.write('FizzBuzz, '); 
//     }
// }

// for(let i=1; i<=101; i++){

//     if(i%3 === 0 && i%5 === 0){

//        document.write('<p>FizzBuzz</p>'); 

//     } else if(i%3 === 0){

//         document.write('<p>Fizz</p>');

//     } else if(i%5 === 0){

//         document.write('<p>Buzz</p>'); 

//     } else {

//         document.write(`<p>${i}</p>`); 
//     }

// }


//4. Escribir un programa que solicite al usuario el número de filas y el número de columnas. 
//Dibujar una tabla con las filas y columnas introducidas, usar etiquetas html " th, tr, td.."

// let numrow = parseInt(prompt('Introduce el número de filas'));
// let numcolumn = parseInt(prompt('Introduce el número de columnas'));

// document.write('<table>');

// for(let i=1; i<=numrow; i++){

//     document.write('<tr>');
    
//     for(let i=1; i<=numcolumn; i++){

//         document.write(`<td>eeeeeeeee</td>`);
//     }

//     document.write('</tr>');
// }

// document.write('</table>');

//5. Crear una página web que solicite al usuario una palabra y muestre un p con el número de vocales que hay.

// const word = prompt('Introduce una palabra');
// let cont = 0;

// for(let i=0; i<word.length; i++){

//     let c = word.charAt(i);
//     if( (c === 'a') || (c === 'e') || (c === 'i') || (c === 'o') || (c === 'u') ) {
//         cont++;
//     }
// }
// document.write(`<p>${cont}</p>`);

//NO FUNCIONA CON INCLUDES SE QUEDA EN A Y NO PASA A LAS DEMAS VOCALES!! PREGUNTAR MAÑANA
// (No se puede hacer con includes busca que este el caracter en todo el string
// porque devuelve TRUE O FALSE y no sabe si por ejemplo hay dos a o i no sabe cuantas hay!)

// let word = prompt('Introduce una palabra'); --> contiene'hola' 
// let cont = 0; --> 0 

// for(let i=0; i<word.length; i++){ --> i=0; 0<hola.lenght = 4; true 

// if(word.includes('a')) { //devuelve true
//     cont++; --> cont = 1
//     } else if(word.includes('e')) {
//     cont++;
//     } else if(word.includes('i')) {
//         cont++;
//     } else if(word.includes('o')) {
//         cont++;
//     } else if(word.includes('u')) {
//         cont++;
//     }  
// }
// document.write(`<p>${cont}</p>`);


//6. Imprime por pantalla el siguiente patron, el cual va a depender del numero que pases por prompt, 
// usaremos CSS para la maquetación (una vez terminado y mediante animation usando @keyframes 
// haz que el triangulo se desplace hasta el otro punto de la pantalla de manera infinita).

/**
 * 
 * Input: number que le pedimos al usuario que representa la altura del triangulo (nº bloques)
 * salida: una estructura de divs --- definilo bien
 * 
 * Ejemplo: n === 3
 * 
 * -
 * --
 * ---
 * ---
 * --
 * -
 * 
 * 1. Fase creciente.
 *      a. Recorro desde 1 hasta n, pintando i bloques --> for
 *         Pintar-bloque: crear un div con una clase especial
 *      b. Recorro desde n hasta 1 (decreciendo) pintando i bloques --> for
 */

// SOLUCION ALEX

// const n = parseInt(prompt('Introduzca la altura de la flecha'));
// // fase creciente
// if(n>1){
//     let outputHTML = '<div class"container">'; //construir poco a poco el HTML
//     //fase creciente
//     for(let i=1; i<=n; i++) {
//         outputHTML+='<div class="row">';
//         outputHTML += 'div class="red"></div>'.repeat(i); //repeat 
//         outputHTML += '</div>';
//     }
//     // fase decreciente
//     for(let i=n; i>=1; i--) {
//         outputHTML+='<div class="row">';
//         outputHTML += 'div class="green"></div>'.repeat(i); //repeat 
//         outputHTML += '</div>';
//     }
// }


//SOLUCION ALBERTO

// let ndivs = parseInt(prompt('Introduce un número'));

// document.write('<div class="container">');

// for(let i=1; i<=ndivs; i++){

//     document.write(`<div class="red" style="width: ${5*i}px;"></div>`);
// }

// for(let i=ndivs; i>=1; i--){

//     document.write(`<div class="green" style="width: ${5*i}px;"></div>`);
// }

// document.write('</div>');


// 7. Crear una página web que solicite al usuario 1 número (n) y cree en HTML  un tablero de ajedrez de nxn, teniendo  en cuenta los colores como en el ajedrez.

// EJERCICIOS DIA 22/04

// 1. Mediante el uso del bucle  while imprime 40 p's con los textos numerados de la siguiente manera:
// 1 hello world loop
// 2 hello world loop
// 3 hello world loop
// ...
// 37 hello world loop

/**
 * Input: number que le pasamos por una varible n que indica el numero de p´s que tiene que imprimir por pantalla
 * salida: una lista de p´s que dentro contienen un texto numerado (hello world loop) 
 * 
 * Ejemplo: n = 40
 * //
 *  1 hello world loop
 *  2 hello world loop
 *  3 hello world loop
 *   ...
 *  37 hello world loop
 */

// let n = 40;
// let cont = 1; 
//     while(cont<=n){
//         document.write(`<p>${cont}. hello world loop</p>`);
//         cont++;
//     }

// 2. Mediante el uso de while crea 100 divs de color #F47732. Modificar el ejercicio para que los divs pares se sean de  color #F47732 
// y los impares #1148F3. Modificar para que  se muestren sobre un contenedor flex.

/**
 *  primer parte del ejercicio:
*       Input: number que le pasamos por una varible n que indica el numero de div´s que tiene que imprimir por pantalla
*       salida: una lista de div´s de color #F47732.
 * 
 *  procedimiento:
 *      variable n= 100; 
 *      variable contador = 1;
 *      bucle while que vaya hasta n, en este caso 100
 *      con document write pintar los divs (dentro de los divs una clase css que tenga el color y displaly flex)
 *      incrementar la variable contador 1.
 */

// const n= 100;
// let cont=1;

// while (cont<=n) {
//     document.write(`<div class="divproperties"></div>`);
//     cont++;
// }

/**
 *  segunda parte del ejercicio
 *      input: number que le pasamos por una variable n que indica el numero de div´s que tiene que imprimir por pantalla
 *      salida: una serie de divs que en este caso sabemos que tienen que ser 100. 
 *      en el que los pares sean de color #F47732 y los impares de otro color. #1148F3
 *      
 *      - tendremos un contenedor div con display flex
 *      - dentro el bucle while con la condicion de que mientras cont sea menor o igual que 100 pinte los divs
 *      - dentro un if else:
 *               1. que si cont es numero par sea de un color
 *               2. que si cont es numero impar sea de otro color distinto
 */

// const n= 100;
// let cont=1;

// document.write('<div class="div_container">');
//     while (cont<=n) {
//         if (cont%2===0) {
//             document.write(`<div class="div_properties_odd"></div>`);
//             cont++;
//         } else{
//             document.write(`<div class="div_properties_even"></div>`);
//             cont++;
//         }
        
//     }

// document.write('</div">');

//3. Solicitar el número al usuario un numero por prompt, e imprime en un P  el número al revés.

/**
 * 
 * 
 */

// const n = prompt('');