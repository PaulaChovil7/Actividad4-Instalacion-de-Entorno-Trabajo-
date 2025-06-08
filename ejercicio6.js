function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const lista = document.getElementById('tabla');
    lista.innerHTML = ''; // Limpiar tabla anterior
  
    // Validación del número
    if (isNaN(numero) || numero < 0 || numero > 10) {
      alert('Por favor, ingresa un número entre 0 y 10.');
      return;
    }
  
    // Generar la tabla de multiplicar
    for (let i = 1; i <= 10; i++) {
      const item = document.createElement('li');
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      lista.appendChild(item);
    }
  }