class cuenta {
    saldo;

    constructor(saldo){
        this.saldo.saldo =saldo
    }

    abonar(dinero){
        this.saldo +=dinero;
    }
    debitar(monto){
        this.saldo -=monto;
    }
    consultasaldo(){
        console.log("tu saldo es de: ", this.saldo)
    }
}
let cuenta1=new cuenta(6000);
let cuenta2=new cuenta(8000);