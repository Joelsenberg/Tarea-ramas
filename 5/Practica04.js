var numero01=prompt("Introduce un numero cualquiera: ");
var numero02=prompt("introduce un numero cualquiera: ");
var numero03=prompt("introduce un numero cualquiera: ");
if(numero01>numero02){
    if(numero01>numero03){
        if(numero02>numero03){
            console.log(numero01,numero02,numero03);
        } else {
            console.log(numero01,numero02,numero03);
        }
    } else {
        if (numero02>numero03){
            if(numero01>numero03){
                console.log(numero02,numero01,numero03);
            }else{
                console.log(numero02,numero03,numero01);
         } 
        } else {
                console.log(numero03,numero02,numero01);
            }
      } 
        }
