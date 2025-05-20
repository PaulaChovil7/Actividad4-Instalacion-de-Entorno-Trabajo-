// funcion para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    console.log('tabla de multiplicar del ${numero}:');
    for (let i = 0; i <= 10; i++) {
        console.log ('${numero} x ${i} = ${numero * i}');




    }
}

// pedir al usuario un numero entre 0 y 10
const numero = parseInt(prompt("introduce un numero entre 0 y 10:"));
// validar que el numero este en el rango correcto
if (numero >= 0 && numero <=10) {
    mostrarTablaMultiplicar(numero);
} else {
    console.log("el numero debe estar entre 0 y 10.");
    
}

