// 11. Escreva um programa que solicita ao usuário 5 números 
// e calcula a soma total
// utilizando um loop for.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Inicializa a variável soma com 0 para acumular a soma dos números
let soma = 0

// Usa um loop 'for' para solicitar 5 números ao usuário
for (let i = 0; i < 5; i++) {
  // Lê um número do usuário e armazena em num
  let num = Number(prompt("Digite um número: "))
  // Adiciona o número lido à variável soma
  soma += num 
}

// Após o loop, exibe a soma total dos números fornecidos
console.log(`A soma de todos os numeros são:` ,soma)