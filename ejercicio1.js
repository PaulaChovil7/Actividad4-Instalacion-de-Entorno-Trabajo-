const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número: ", (num) => {
  num = parseFloat(num);

  if (num > 0) {
    console.log("El número es positivo.");
  } else if (num < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es cero.");
  }

  const cuadrado = num * num;
  console.log("Su cuadrado es:", cuadrado);

  rl.close();
});