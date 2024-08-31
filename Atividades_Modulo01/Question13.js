// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e 
// fazer a média aritmética desses números.

// Importa o módulo 'prompt-sync' para ler entrada do usuário
const prompt = require("prompt-sync")()

// Lê o primeiro número do usuário e armazena em numEntrada
let numEntrada = Number(prompt('Insira o primeiro número: '))

// Inicializa as variáveis para contar o total de números e acumular a soma
let totalNumeros = 0
let somaTotal = 0

// Enquanto o número inserido não for 0, continua a ler números
  while(numEntrada !== 0){
      // Adiciona o número atual à soma total
      somaTotal += numEntrada
      // Incrementa o contador de números
      totalNumeros++
      // Solicita ao usuário que insira outro número
      numEntrada = Number(prompt('Digite outro número: '))
    // Informa ao usuário que pode parar a qualquer momento digitando '0'
    console.log("OBS: Quando quiser parar digite '0'")
}

  // Após sair do loop, verifica se algum número foi inserido
if(totalNumeros > 0){
  // Se foram inseridos números, calcula e exibe a média aritmética
  console.log('A média aritmética é: ', somaTotal / totalNumeros);
} else {
  // Se nenhum número foi inserido, exibe uma mensagem informando isso
  console.log('Nenhum número foi inserido.')
}