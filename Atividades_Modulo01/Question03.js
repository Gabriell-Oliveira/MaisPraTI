// 3. Implemente um programa que recebe uma nota de 0 a 10 e 
// classifica como "Aprovado", "Recuperação", ou "Reprovado" 
// utilizando if-else if.

// Aprovado: 7 - 10
// Recuperação: 4 - 6
// Reprovado: 0 - 3

// Importa o módulo prompt-sync para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê a nota do usuário e armazena em nota
let nota = Number(prompt("Digite a sua nota: "))

// Classifica a nota em categorias
if (nota >= 7){ // Aprovado: 7 - 10
  // Loga uma mensagem no console indicando que a pessoa está aprovada
  console.log("Você está Aprovado!")
}else if (nota >= 4 && nota <= 6){// Recuperação: 4 - 6
  // Loga uma mensagem no console indicando que a pessoa está de recuperação
  console.log("Você está de recuperação.")
}else if (nota >= 0 && nota <= 3){// Reprovado: 0 - 3
  // Loga uma mensagem no console indicando que a pessoa está reprovada
  console.log("Você está REPROVADO!")
}