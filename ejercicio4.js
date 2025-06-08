// script.js
function calcularFactorial() {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    let numero = parseInt(input.value);
  
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = 'Por favor, ingresa un número entero positivo.';
      return;
    }
  
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    resultado.textContent = `El factorial de ${numero} es ${factorial}`;
  }