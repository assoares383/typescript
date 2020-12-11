"use strict";
function ola(person) {
    console.log(`Olá, ${person.name}`);
}
function changeName(person) {
    person.name = 'Joana';
}
const person = {
    name: 'Alexandre',
    idade: 40
};
ola(person);
changeName(person);
ola(person);
ola({ name: 'Jonas', age: 40 });
