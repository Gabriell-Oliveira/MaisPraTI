// 2. Crie um programa que classifica a idade de uma pessoa em categorias 
// (criança, adolescente, adulto, idoso) 
// com base no valor fornecido, 
// utilizando uma estrutura de controle if-else.

// Criança: 0 - 12 anos
// Adolescente: 13 - 17 anos
// Adulto: 18 - 59 anos
// Idoso: 60 anos ou mais

// Importa o módulo prompt-sync para ler entrada do usuário
const prompt = require("prompt-sync")();

// Lê a idade do usuário e armazena em idade
let idade = Number(prompt("Digite a sua idade: "));

// Classifica a idade em categorias
if (idade >= 0 && idade <= 12){// Criança: 0 - 12 anos
  // Loga uma mensagem no console indicando que a pessoa é uma criança
  console.log("Você é uma criança.")
}else if (idade >= 13 && idade <= 17){// Adolescente: 13 - 17 anos
  // Loga uma mensagem no console indicando que a pessoa é um adolescente
  console.log("Você é um adolecente.")
}else if (idade >= 18 && idade <= 59){// Adulto: 18 - 59 anos
  // Loga uma mensagem no console indicando que a pessoa é um adulto
  console.log("Você é um adulto.")
}else {// Idoso: 60 anos ou mais
  // Loga uma mensagem no console indicando que a pessoa é um idoso
  console.log("Você é um idoso.")
}