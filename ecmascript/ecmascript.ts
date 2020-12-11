// Let and const 
let value1 = '?';
console.log(value1);

let isCold = true;
if(isCold) {
  let action = 'Put on the coat!';
  console.log(action);
}

const cpf:string = '123.456.789-00';
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
function adding (n1: number, n2: number): number { 
  return n1 + n2;
}
console.log(adding(2,2));


const subtract = (n1: number, n2: number) => n1 - n2;
console.log(subtract(10,2));

const namePerson = ( person: string ) => console.log(`Ola ${person}`);
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
function countdown(
  initial: number = 5,
        end: number = initial - 5): void {

  console.log(initial);
  while(initial > 0) {
    initial--;
    console.log(initial);
  }
  console.log("Fim!");
}

countdown()
countdown(3)

// Rest & Spread
const numbers = [1, 10, 3, 7, 9];
console.log(Math.max(...numbers));

const group1: string[] = ['nome 1', 'nome 2', 'nome 3'];
const group2: string[] = ['nome 10', 'nome 99', 'nome 25'];
const group3: string[] = [...group1, ...group2, 'nome 110'];
console.log(group3);

function group(...args: number[]): number[] {
  return args;
}

const numbers1 = group(1,2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers1);

// Destructuring ( Array )
const characteristics = ['Motor Zetec 1.8', 2020];
const [motor, age] = characteristics;

console.log(motor);
console.log(age);

// Destructuring ( Object )
const item = {
  nome: 'SSD 480GB',
  preco: 200
}

const { nome: n, preco: p} = item;
console.log(n);
console.log(p);

// Template String
const user: string = 'ecmascript01';
const notifications: string = '9';
const welcome = `Boas vindas ${user} Notificações: ${notifications}`;
console.log(welcome);
