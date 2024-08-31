// 1. Escreva um programa que recebe um número inteiro e 
// verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// Importa o módulo prompt-sync para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê um número inteiro do usuário e armazena em Num
let Num = Number(prompt("Digite um número para verificar se ele é par ou ímpar: "))

// Verifica se o número é par ou ímpar
if (Num % 2 === 0) { // Se o resto da divisão por 2 for 0, é par
  // Loga uma mensagem no console indicando que o número é par
  console.log(`O numero ${Num} é par!`)
}else {// Se não for par, é ímpar
  // Loga uma mensagem no console indicando que o número é ímpar
  console.log(`O numero ${Num} é Impar!`)
}