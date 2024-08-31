// 7. As maçãs custam R$ 0,30 
// se forem compradas menos do que uma dúzia, 
// e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê a quantidade de maçãs compradas e armazena em Quantidade
let Quantidade = Number(prompt("Quantas maçãs você deseja comprar? "))

// Calcula o valor total das maçãs se compradas a R$ 0,30 cada (menos de uma dúzia)
let valor1 = Quantidade * 0.30 

// Calcula o valor total das maçãs se compradas a R$ 0,25 cada (pelo menos uma dúzia)
let valor2 = Quantidade * 0.25

// Verifica a quantidade de maçãs e calcula o valor total com base no preço
if (Quantidade < 12){
  // Se a quantidade de maçãs é menor que 12, usa o valor de R$ 0,30 por maçã
  console.log(`As suas maçãs custam R$ ${valor1} reais !`)
}else if(Quantidade >= 12){
  // Se a quantidade de maçãs é 12 ou mais, usa o valor de R$ 0,25 por maçã
  console.log(`As suas maçãs custam R$ ${valor2} reais!`)
}