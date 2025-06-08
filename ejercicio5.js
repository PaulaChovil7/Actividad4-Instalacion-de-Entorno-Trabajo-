// Generar 10 campos de entrada
const entradasDiv = document.getElementById('entradas');

for (let i = 0; i < 10; i++) {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = `Número ${i + 1}`;
  input.id = `num${i}`;
  entradasDiv.appendChild(input);
  entradasDiv.appendChild(document.createElement('br'));
}

function calcular() {
  let positivos = 0, sumaPositivos = 0;
  let negativos = 0, sumaNegativos = 0;
  let ceros = 0;

  for (let i = 0; i < 10; i++) {
    const valor = parseFloat(document.getElementById(`num${i}`).value);

    if (isNaN(valor)) {
      alert(`Por favor, ingresa todos los números`);
      return;
    }

    if (valor > 0) {
      sumaPositivos += valor;
      positivos++;
    } else if (valor < 0) {
      sumaNegativos += valor;
      negativos++;
    } else {
      ceros++;
    }
  }

  const mediaPos = positivos > 0 ? (sumaPositivos / positivos).toFixed(2) : 'No hay positivos';
  const mediaNeg = negativos > 0 ? (sumaNegativos / negativos).toFixed(2) : 'No hay negativos';

  document.getElementById('positivos').textContent = `Media de positivos: ${mediaPos}`;
  document.getElementById('negativos').textContent = `Media de negativos: ${mediaNeg}`;
  document.getElementById('ceros').textContent = `Cantidad de ceros: ${ceros}`;
}