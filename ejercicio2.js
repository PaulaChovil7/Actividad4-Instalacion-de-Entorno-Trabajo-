const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Jugador 1, ingrese el número secreto (N): ", (secreto) => {
  const numeroSecreto = parseInt(secreto);

  if (isNaN(numeroSecreto)) {
    console.log("Por favor, ingrese un número válido.");
    rl.close();
    return;
  }

  console.clear(); // limpia la pantalla para ocultar el número secreto

  console.log("Jugador 2, adivina el número:");

  function intentarAdivinar() {
    rl.question("Tu intento: ", (intento) => {
      const numIntento = parseInt(intento);

      if (isNaN(numIntento)) {
        console.log("Eso no es un número. Intenta de nuevo.");
        intentarAdivinar();
        return;
      }

      if (numIntento < numeroSecreto) {
        console.log("Mayor");
        intentarAdivinar();
      } else if (numIntento > numeroSecreto) {
        console.log("Menor");
        intentarAdivinar();
      } else {
        console.log("¡Correcto! Adivinaste el número.");
        rl.close();
      }
    });
  }

  intentarAdivinar();
});