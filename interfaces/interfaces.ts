interface IData {
  name: string;
  age?: number;
}

function ola(person: IData) {
  console.log(`Olá, ${person.name}`);
}

function changeName(person: IData) {
  person.name = 'Joana';
}

const person = {
  name: 'Alexandre',
  idade: 40
}

ola(person);
changeName(person);
ola(person);
ola({ name: 'Jonas', age: 40 });
