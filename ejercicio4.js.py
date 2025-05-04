# factorial.py

# Pedir al usuario un número
numero = int(input("Introduce un número entero positivo: "))

# Verificar que el número sea válido
if numero < 0:
    print("El factorial no está definido para números negativos.")
else:
    factorial = 1
    for i in range(1, numero + 1):
        factorial *= i
    print(f"El factorial de {numero} es {factorial}")
    
