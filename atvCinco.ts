/*
5 – O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. Este índice é
obtido pelo peso (em Kg) dividido pelo quadrado da altura (em metros). A tabela a seguir
apresenta as faixas deste índice:
IMC Avaliação
Menor que 18,5 Baixo peso
De 18,5 a 24,99 Normal
De 25 a 29,99 Sobrepeso
Maior que 30 Obesidade
*/

let teclado = require('prompt-sync')();
let peso = Number(teclado('Digite seu peso: '));
let altura = Number(teclado('Digite sua altura: '));
let imc = peso / (altura * altura);
let avaliacao = '';
if (imc < 18.5) {
    avaliacao = 'Peso abaixo da média';
} else if (imc >= 18.5 && imc <= 24.99) {
    avaliacao = 'Normal';
} else if (imc >= 25 && imc <= 29.99) {
    avaliacao = 'Sobrepeso';
} else {
    avaliacao = 'Obesidade';
}
console.log('IMC: ', imc.toFixed(2));
console.log('Avaliação: ', avaliacao);