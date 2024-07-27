console.log("1. Sumar");
console.log("2. Resta");
console.log("3. Salir");
const opcion=prompt("Ingresa cualquiera de las tres opciones");
 switch (opcion){
    case"1":
    console.log("Has seleccionado 1.Suma");
    var numero01=prompt("Porfavor introduce un numero:");
    var numero02=prompt("Porfavor introduce un segundo numero:");
    suma=(parseInt(numero01)+parseInt(numero02));
    console.log("La suma entre "+numero01 +" y " +numero02 +" es: "+suma);
    break;
    case"2":
    console.log("Has seleccionado 2. resta");
    var numero01=prompt("Porfavor introduce un numero");
    var numero02=prompt("porfavor introduce un segundo numero");
    resta=(parseInt(numero01)-parseInt(numero02));
    console.log("La resta entre "+numero01 +" y " +numero02 +" es: " +resta);
    break;
    case"3":
    console.log(" Usted a salido del sistema ");
    break;
 }   
