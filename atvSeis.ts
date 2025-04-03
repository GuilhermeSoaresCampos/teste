/*
6 – Faça um programa que pergunte qual tabuada deseja exibir, e mostre essa tabuada (tente
    usar laço de repetição)
*/

let teclado = require('prompt-sync')();
let tabuada = parseInt(teclado('Digite a tabuada que deseja exibir: '));
let i = 0;
let resultado = 0;
console.log('Tabuada do ' + tabuada + ':');
while (i < 10) 
    i++;
    resultado = tabuada * i;
    console.log(tabuada + ' x ' + i + ' = ' + resultado);
console.log('Digite um número válido!');
console.log('Fim da tabuada!');