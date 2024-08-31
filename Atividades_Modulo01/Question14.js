// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê um número do usuário para calcular o fatorial e armazena em Fatorial
let Fatorial = Number(prompt("Digite um numero para saber seu Fatorial: "))

// Inicializa a variável contador com 1 para acumular o resultado do fatorial
let contador = 1

// Usa um loop 'for' para calcular o fatorial
for (let i = 1; i <= Fatorial; i++) {
  // Multiplica o valor atual de contador pelo índice i
  contador *= i
}
// Exibe o resultado do fatorial
console.log(`O fatorial de ${Fatorial} é ${contador}`)