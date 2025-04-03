
/* 
3- Faça um programa que receba 5 números e retorne o número maior e o número menor
Nome: Guilherme Henrique Soares Campos
*/

let teclado = require('prompt-sync')();
let n1 = parseInt(teclado('Digite o primeiro número: '));
let n2 = parseInt(teclado('Digite o segundo número: '));
let n3 = parseInt(teclado('Digite o terceiro número: '));
let n4 = parseInt(teclado(`Digite o quarto número: `));
let n5 = parseInt(teclado(`Digite o quinto número: `));

let numeros = [n1, n2, n3, n4, n5];
let max = Math.max(...numeros);
let min = Math.min(...numeros);

console.log(`O maior número é: ${max}`);
console.log(`O menor número é: ${min}`);
console.log(`Os números digitados foram: ${numeros}`);