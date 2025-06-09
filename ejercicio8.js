//pedir un numero N de sueldos
let n=parseInt(prompt("Introduzca el numero de sueldo(N):"));

//validar la entrada
if(isNaN(n)||n <=0){
    console.log("Entrada invalida. N debe ser un numero entero positivo,");
    return
}

//Introducir N sueldos
let sueldos=[];
for(let i=0; i<n;i++){
    let sueldos=
    parseFloat(prompt('Introduzca el sueldo ${i+1}:'));
    //validar la entrada 
    if(isNaN(sueldo)||sueldo <0){
        console.log("Entrada invalida.El sueldo debe ser un numero positivo.");
        return;
    }
    sueldos.push(sueldo);
}

//mostrar el sueldo maximo
let maxSueldo=
Math.max(...sueldos);
console.log('El sueldo maximo es: $ {maxSueldo}');

//Mostrar el contador de 5 digitos con la sustitucion del 3 por E
function contador(){
    for(let i=0;i<=99999; i++){
        let numStr=i.toString().padStart(5,'0');
        let contadorStr=numStr.replace(/3/g,'E');
        console.log(contadorStr.replace(/(\d{1})/g,'$1-'));

    }
}
contador();
