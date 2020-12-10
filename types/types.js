"use strict";
// string
var nome = 'Alexandre';
console.log(nome);
// numbers
var idade = 27;
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 40;
console.log(typeof minhaIdade);
// array
var hobbies = ["cozinhar", "Praticar Esportes"];
console.log(hobbies);
console.log(typeof hobbies);
// tupla
var endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
// enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
