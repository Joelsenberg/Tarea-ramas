//Elaboracion de matriz de 5 x 4
function obtenerNumeros() {
    const numeros = [];
    
    for (let i = 0; i < 20; i++) {
        let numero = prompt(`Introduce el número ${i + 1}:`);
        numeros.push(numero);
    }
    
    return numeros;
}

// Crear una función para mostrar la matriz en la consola
function mostrarMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Obtener los números del usuario
const numeros = obtenerNumeros();

// Crear la matriz de 5x4
const matriz = [];
for (let i = 0; i < 5; i++) {
    matriz.push(numeros.slice(i * 4, (i + 1) * 4));
}

// Mostrar la matriz en la consola
mostrarMatriz(matriz);
