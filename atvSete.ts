/*
7- Faça um programa que pergunte qual número deseja calcular o fatorial, e exiba o resultado
*/

let teclado = require(`prompt-sync`)();
let numero = parseInt(teclado("Digite o número que deseja calcular o fatorial: "));
let fatorial = 1;
let contador = 1;
let resultado = "";
let i = 1;
console.log(`Calculando o fatorial de ${numero}!`);
while (contador <= numero) {
    fatorial = fatorial * contador;
    resultado = resultado + contador + " x ";
    contador++;
}
console.log(`O fatorial de ${numero} é: ${resultado} = ${fatorial}`);
console.log(`O programa chegou ao fim!`);