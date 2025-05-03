let producto = 1;

for (let i = 1, contador = 0; contador < 10; i += 2) {
  producto *= i;
  contador++;
}

console.log("El producto de los 10 primeros números impares es:", producto);