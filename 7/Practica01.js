while(true){
    let numero=parseInt(prompt("ingrese un numero cualquiera"));
    if(numero>0){
        console.log(numero**2);
    }else{
        console.log("Error, usted ingreso un numero negativo");
        break;
    }
}