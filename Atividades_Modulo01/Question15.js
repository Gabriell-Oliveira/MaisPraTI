// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// Inicializa as variáveis para a sequência de Fibonacci
let a = 0
let b = 1

// Exibe o título da sequência de Fibonacci
console.log("Sequência de Fibonacci:")

// Usa um loop 'for' para gerar e imprimir os primeiros 10 números da sequência de Fibonacci
for (let i = 0; i < 10; i++) {
  // Imprime o valor atual de a na sequência
  console.log(a)
  // Armazena o valor atual de a em tempo
  let tempo = a
  // Atualiza a para o próximo número na sequência
  a = b
  // Atualiza b para a soma dos dois números anteriores
  b = tempo + b
}