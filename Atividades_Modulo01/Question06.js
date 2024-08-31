// 6. Ler três valores para os lados de um triângulo: A, B e C. 
// Verificar se os lados fornecidos formam realmente um triângulo. 
// Caso forme, deve ser indicado o tipo de triângulo:

// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require ("prompt-sync")()

// Lê o valor do lado 'A' do triângulo e armazena em A
let A = Number(prompt("Digite o valor do lado 'A' para verificar se é um triângulo: "))

// Lê o valor do lado 'B' do triângulo e armazena em B
let B = Number(prompt("Digite o valor do lado 'B' para verificar se é um triângulo: "))

// Lê o valor do lado 'C' do triângulo e armazena em C
let C = Number(prompt("Digite o valor do lado 'C' para verificar se é um triângulo: "))

// Verifica se os lados fornecidos formam um triângulo com base nas condições de validade
let VDD =  A < B + C && B < A + C && C < A + B

// Se os lados não formam um triângulo, exibe uma mensagem
if (!VDD) {
  console.log("Os lados fornecidos não formam um triângulo.")
} else {
  // Se os lados formam um triângulo, determina o tipo de triângulo
  switch (true) {
      // Se todos os lados são iguais, é um triângulo eqüilátero
      case A === B && B === C:
      console.log("Triângulo eqüilátero")
      break
    // Se dois lados são iguais, é um triângulo isósceles
    case A === B || A === C || B === C:
      console.log("Triângulo isósceles")
      break
    // Se todos os lados são diferentes, é um triângulo escaleno
    case A !== B && B !== C:
      console.log("Triângulo escaleno")
      break
  }
}