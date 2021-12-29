/**
 * param []
 * resultado []
 */
function recorrerEnCaracol(matriz) {
    //resultado
    const vector = [];
    // variables de posición
    let izq = 0;
    let arriba = 0;
    let der = matriz[0].length - 1;
    let abajo = matriz.length - 1;
    const tamaño = matriz.length * matriz[0].length;

    while(vector.length < tamaño) {
        //iterador sobre filas y columnas
        for(let i = izq; i <= der && vector.length < tamaño; i++) {
            vector.push(matriz[arriba][i]);
        }
        arriba++;

        for(let i = arriba; i <= abajo && vector.length < tamaño; i++) {
            vector.push(matriz[i][der]);
        }
        der--;

        for(let i = der; i >= izq && vector.length < tamaño; i--) {
            vector.push(matriz[abajo][i]);
        }
        abajo--;

        for (let i = abajo; i >= arriba && vector.length < tamaño; i--) {
            vector.push(matriz[i][izq]);
        }
        izq++;
    }
    return vector;
}


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const res = recorrerEnCaracol(arr);
console.log(res);