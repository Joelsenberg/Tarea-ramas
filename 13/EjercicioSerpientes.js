class TableroDeSerpientesYEscaleras{
    fila
    columna
    trampasFila

    constructor(fila, columna, trampasFila){
        this.fila=fila;
        this.columna=columna;
        this.trampasFila=trampasFila;
    }
    generarCantidadTrampas(){
        let trampasMax = 4
        let trampasMin = 1
        this.trampasFilas =Math.floor(Math.random()*(trampasMax-trampasMin+1)+trampasMin)
    }

    imprimirTablero(){
        let numero= this.columna*this.fila;
        let columnas="------------------------------------------------ \n"
        for(let i=0;i<this.fila;i++){
            let filas=''
            for(let j=0; j< this.columna; j++){
                if (numero < 10){
                    filas += '|'+ numero + '|'
                } else{
                    filas +='|'+numero+'|'
                }
                numero--;
                trampasFilas += '|'+this.tableroTrampas[i][j]+'|'
        }
        columnas += filas + "\n"
        columnas += this.trampasFila + "\n"
        columnas +='------------------------------------------------ \n'
    }
    console.log(columnas)
}
}
const tabla=new TableroDeSerpientesYEscaleras(8,8,1);
tabla.imprimirTablero();
