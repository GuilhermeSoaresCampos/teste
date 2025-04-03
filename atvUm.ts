/*1 - Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
equilátero, isósceles ou escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isósceles: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.
*/

let teclado = require (`prompt-sync`)();

let lado1: number = parseInt(teclado(`Fale o primeiro lado do triângulo:`));
let lado2: number = parseInt(teclado(`Fale o segundo lado do triângulo:`));
let lado3: number = parseInt(teclado(`Fale o terceiro lado do triângulo:`));
if (lado1 == lado2 && lado2 == lado3){
console.log(`Triângulo Equilátero`);
}
else if ( lado1 == lado2 && lado2 !=lado3 || lado1 == lado3 && lado3 !=lado2 || lado2 == lado3 && lado2 !=lado1){
console.log(`Trângulo Isóceles`);
}
else if (lado1 != lado2 && lado2 != lado3){
console.log(`Triângulo Escaleno`);
}
