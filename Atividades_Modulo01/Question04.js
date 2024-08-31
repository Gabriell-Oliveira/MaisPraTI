// 4. Crie um menu interativo no console 
// que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// Importa o módulo prompt-sync para ler entrada do usuário
const prompt = require("prompt-sync")()

// Mostra um menu para o usuário e armazena a escolha em menu
let menu = Number(prompt(`Escolha uma das opções a seguir: 
    opção 1 - digite 1
    opção 2 - digite 2
    opção 3 - digite 3
`))

// Usa uma estrutura switch para lidar com as opções escolhidas pelo usuário
switch(menu) {
  case 1: // Opção 1
    // Loga uma mensagem no console indicando que a primeira opção foi escolhida
    console.log('Você escolheu a Primeira opção :)')
    break;
  case 2: // Opção 2
    // Loga uma mensagem no console indicando que a segunda opção foi escolhida
    console.log('Você escolheu a segundo opção :|')
    break;
  case 3: // Opção 3
    // Loga uma mensagem no console indicando que a terceira opção foi escolhida
    console.log("Você escolheu a terceira opção :(")
    break
  default: // Opção inválida
    // Loga uma mensagem no console indicando que a opção escolhida é inválida
    console.log("Você digitou uma opção invalida. Por favor tente novamente")
      break
}