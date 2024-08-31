// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
// (de 1 a 10) utilizando um loop for.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê um número do usuário e armazena em num
let num = Number(prompt("Digite um número para saber a sua tabuada: "))

// Exibe o título da tabuada do número fornecido
console.log(`Tabuada do ${num}:`)

// Calcula e exibe a adição de num com valores de 0 a 10
for (let Tabuada = 0; Tabuada <= 10; Tabuada++){
  // Imprime a soma de num e Tabuada
  console.log(`${num} + ${Tabuada} = `, num + Tabuada)
}
console.log("\n") // Adiciona uma linha em branco para separar as operações
// Calcula e exibe a subtração de num com valores de 0 a 10
for (let Tabuada = 0; Tabuada <= 10; Tabuada++){
  // Imprime a subtração de num e Tabuada
  console.log(`${num} - ${Tabuada} = `, num - Tabuada)
}
console.log("\n") // Adiciona uma linha em branco para separar as operações
// Calcula e exibe a multiplicação de num com valores de 0 a 10
for (let Tabuada = 0; Tabuada <= 10; Tabuada++){
// Imprime a multiplicação de num e Tabuada
console.log(`${num} * ${Tabuada} = `, num * Tabuada)
}
console.log("\n")// Adiciona uma linha em branco para separar as operações
// Calcula e exibe a divisão de num com valores de 0 a 10
for (let Tabuada = 0; Tabuada <= 10; Tabuada++){
  // Imprime a divisão de num por Tabuada
  // Atenção: Divisão por zero pode gerar um resultado infinito
console.log(`${num} / ${Tabuada} = `, num / Tabuada)
}