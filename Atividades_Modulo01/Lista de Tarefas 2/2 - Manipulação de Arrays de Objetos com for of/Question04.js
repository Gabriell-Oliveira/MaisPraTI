// 4. Iterando Sobre Arrays de Objetos:
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. 
// Use for of para exibir as informações de cada pessoa no console.

// Criando o arrays de objetos Pessoas
let Pessoas = [
    { Nome: "Gabriel", Idade: 19, Cidade: "Fortaleza"},
    { Nome: "Amanda", Idade: 17, Cidade: "Porto"}
]

// Usando for...of para iterar sobre o array de objetos Pessoas
for (let Pessoa of Pessoas) {
    console.log(`Nome: ${Pessoa.Nome}, Idade: ${Pessoa.Idade}, Cidade: ${Pessoa.Cidade}`)
}
