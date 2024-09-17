// 1. Acessando Propriedades de Objetos: 
// Objetivo: Crie um objeto carro com propriedades como 
// marca, modelo, ano, e cor. 
// Use for in para iterar sobre as propriedades e 
// exibir seus valores no console.

// Criando o objeto Carro
let Carro = {
    Marca: "Volkswagen",
    Modelo: "Gol",
    Ano: 2017,
    Cor: "Prata"
}

// Usando o for in para iterar sobre as propriedades do objeto Carro
for(let Propriedades in Carro) {
    console.log(`${Propriedades}: ${Carro[Propriedades]}`)
}
