"use strict";
// Let and const 
let value1 = '?';
console.log(value1);
let isCold = true;
if (isCold) {
    let action = 'Put on the coat!';
    console.log(action);
}
const cpf = '123.456.789-00';
//cpf = '019.876.543.210'
console.log(cpf);
var secret = 'externo!';
function toReveal() {
    const secret = 'interno';
    console.log(secret);
}
toReveal();
console.log(secret);
// Arrow functions
function adding(n1, n2) {
    return n1 + n2;
}
console.log(adding(2, 2));
const subtract = (n1, n2) => n1 - n2;
console.log(subtract(10, 2));
const namePerson = (person) => console.log(`Ola ${person}`);
namePerson('Alexandre');
// this
function thisNorm() {
    console.log(this);
}
thisNorm();
const thisNorm2 = thisNorm.bind({ nome: 'Alexandre' });
thisNorm2();
const arrowThis = () => console.log(this);
arrowThis();
// Parâmetros padrão
function countdown(initial = 5, fim = initial - 5) {
    console.log(initial);
    while (initial > 0) {
        initial--;
        console.log(initial);
    }
    console.log("Fim!");
}
countdown();
countdown(3);
// Rest & Spread
const numbers = [1, 10, 3, 7, 9];
console.log(Math.max(...numbers));
