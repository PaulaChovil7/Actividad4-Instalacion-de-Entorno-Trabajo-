# promedios.py

positivos = 0
suma_positivos = 0

negativos = 0
suma_negativos = 0

ceros = 0

# Pedir 10 números
for i in range(10):
    num = float(input(f"Ingrese el número {i+1}: "))

    if num > 0:
        suma_positivos += num
        positivos += 1
    elif num < 0:
        suma_negativos += num
        negativos += 1
    else:
        ceros += 1

# Calcular promedios
media_positivos = suma_positivos / positivos if positivos != 0 else 0
media_negativos = suma_negativos / negativos if negativos != 0 else 0

# Mostrar resultados
print("\n--- Resultados ---")
print(f"Media de positivos: {media_positivos}")
print(f"Media de negativos: {media_negativos}")
print(f"Cantidad de ceros: {ceros}")