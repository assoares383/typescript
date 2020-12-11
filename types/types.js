"use strict";
// string
let nome = 'Alexandre';
console.log(nome);
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 40;
console.log(typeof minhaIdade);
// array
let hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies);
console.log(typeof hobbies);
// tupla
let endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
// enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
