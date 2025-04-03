/*
4 - Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino
ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa
Noite!" ou "Valor Inválido!", conforme o caso.
Nome: Guilherme Henrique Soares Campos
*/

let teclado = require (`prompt-sync`)();

let turno: string = teclado("Em que turno você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno:");


if (turno === "M") {
    console.log("Bom Dia!");
} else if (turno === "V") {
    console.log("Boa Tarde!");
} else if (turno === "N") {
    console.log("Boa Noite!");
} else {
    console.log("Valor Inválido!");
}




