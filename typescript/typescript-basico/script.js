"use strict";
function toNumber(numero) {
    if (typeof numero === 'number') {
        return 'number';
    }
    else if (typeof numero === 'string') {
        return 'string';
    }
    else {
        throw new Error("Valor deve ser um numero ou string");
    }
}
const valor = toNumber('#');
console.log(valor);
