var numero01=prompt("Introduce un numero cualquiera: ");
var numero02=prompt("introduce un numero cualquiera: ");
if(numero01>numero02){
    alert("Los numeros en orden de mayor a menor son: " +numero01 +"  y  " +numero02);
}else if(numero01<numero02){
    alert("Los numeros en orden de mayor a menor son: " +numero02 +"  y  "  +numero01);
}else{
    alert("Ambos numeros son iguales  " +numero01);
}