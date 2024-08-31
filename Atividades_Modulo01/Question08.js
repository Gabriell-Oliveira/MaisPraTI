// 8. Escreva um algoritmo para ler 2 valores 
// (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê o primeiro valor e armazena em ValorUm
let ValorUm = Number(prompt("Digite o primeiro valor: "))

// Lê o segundo valor e armazena em ValorDois
let ValorDois = Number(prompt("Digite o segundo valor: "))

// Verifica qual valor é maior e imprime os valores em ordem crescente
if (ValorUm > ValorDois){
   // Se ValorUm for maior que ValorDois, imprime ValorDois primeiro e depois ValorUm
  console.log(`${ValorDois} e ${ValorUm}`)
}else {
  // Se ValorDois for maior ou igual a ValorUm, imprime ValorUm primeiro e depois ValorDois
  console.log(`${ValorUm} e ${ValorDois}`)
}