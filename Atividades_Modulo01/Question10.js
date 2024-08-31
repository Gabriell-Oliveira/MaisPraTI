// 10. Escreva um algoritmo para ler um número inteiro e 
// escrevê-lo na tela 10 vezes.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê um número inteiro do usuário e armazena em inteiro
let inteiro = Number(prompt("Digite um número: "))

// Usa um loop 'for' para repetir a ação 10 vezes
for(let i = 0; i < 10; i++){
   // Imprime o número inteiro na tela a cada iteração do loop
  console.log(inteiro)
}