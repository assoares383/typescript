"use strict";
// Using generics
function echo(object) {
    return object;
}
console.log(echo('Alexandre').length);
console.log(echo(40));
console.log(echo({ name: 'Alexandre', age: 40 }));
const rating = [10, 9.3, 7.7];
rating.push(8.4);
//rating.push('5.5');
console.log(rating);
// Array
function print(args) {
    args.forEach(element => console.log(element));
}
print([1, 2, 3]);
print([1, 2, 3]);
print(['Nome 1', 'Nome 2', 'Nome 3']);
// class with generics
class Operator {
    constructor(operator1, operator2) {
        this.operator1 = operator1;
        this.operator2 = operator2;
    }
}
// console.log(new Operator('Good ', 'Morning').execute());
// console.log(new Operator(3,7).execute());
// console.log(new Operator(3, ' Opa').execute());
class binarySum extends Operator {
    execute() {
        return this.operator1 + this.operator2;
    }
}
console.log(new binarySum(10, 20).execute());
