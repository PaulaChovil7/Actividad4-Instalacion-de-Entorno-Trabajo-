# Pedir un número entre 0 y while True:
    try:
        numero = int(input("Ingresa un número entre 0 y 10: "))
        if 0 <= numero <= 10:
            break
        else:
            print("❌ El número debe estar entre 0 y 10.")
    except ValueError:
        print("❌ Entrada inválida. Ingresa un número entero.")
