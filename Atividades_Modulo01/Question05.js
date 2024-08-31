// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// Abaixo do peso: IMC < 18.5
// Peso normal: IMC 18.5 - 24.9
// Sobrepeso: IMC 25 - 29.9
// Obesidade grau I: IMC 30 - 34.9
// Obesidade grau II: IMC 35 - 39.9
// Obesidade grau III: IMC >= 40

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Exibe uma mensagem informando ao usuário que deve usar '.' para números decimais
console.log("OBS: use '.' se o valor for quebrado ")

// Lê o peso do usuário e armazena em peso
let peso = Number(prompt("Digite seu peso: "))

// Lê a altura do usuário e armazena em altura
let altura = Number(prompt("Digite sua altura: "))

// Calcula o Índice de Massa Corporal (IMC) usando a fórmula IMC = peso / altura^2
let IMC = peso / altura ** 2

// Verifica a categoria de peso com base no valor do IMC
if (IMC < 18.5){ // Se IMC for menor que 18.5, está abaixo do peso
  // Loga uma mensagem no console indicando que o usuário está abaixo do peso
  console.log("Você está Abaixo do peso!")
} else if (IMC >= 18.5 && IMC <= 24.9){ // Se IMC estiver entre 18.5 e 24.9, está com o peso normal
  // Loga uma mensagem no console indicando que o usuário está com peso normal
  console.log("Você está com o peso normal")
}else if (IMC >= 25 && IMC <= 29.9){ // Se IMC estiver entre 25 e 29.9, está com sobrepeso
  // Loga uma mensagem no console indicando que o usuário está com sobrepeso
  console.log("Você está com Sobrepeso!")
}else if (IMC >= 30 && IMC <= 34.9){ // Se IMC estiver entre 30 e 34.9, está com obesidade grau I
  // Loga uma mensagem no console indicando que o usuário está com obesidade grau I
  console.log("Você está com Obesidade grau I!")
}else if (IMC >= 35 && IMC <= 39.9){ // Se IMC estiver entre 35 e 39.9, está com obesidade grau II
  // Loga uma mensagem no console indicando que o usuário está com obesidade grau II
  console.log("Você está com Obesidade grau II!")
}else if (IMC >= 40){ // Se IMC for 40 ou mais, está com obesidade grau III
  // Loga uma mensagem no console indicando que o usuário está com obesidade grau III
  console.log("Você está com Obesidade grau III!")
}