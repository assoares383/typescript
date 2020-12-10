// string
let nome: string = 'Alexandre';
console.log(nome);

// numbers
let idade: number = 27;
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: number;
minhaIdade = 40;
console.log(typeof minhaIdade);

// array
let hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies);
console.log(typeof hobbies);

// tupla
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde,
  Azul
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 }
console.log(carro);

// funções
function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());