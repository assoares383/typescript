"use strict";
class Data {
    constructor(day, month, age) {
        this.day = day;
        this.month = month;
        this.age = age;
    }
}
const birthday = new Data(3, 11, 1991);
birthday.day = 4;
console.log(birthday.day);
class Produto {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}
const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.discount = 0.6;
console.log(prod1);
const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2);
