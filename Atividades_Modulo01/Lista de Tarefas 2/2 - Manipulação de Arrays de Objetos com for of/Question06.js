// 6. Filtrando Arrays de Objetos:
// Objetivo: Crie um array de objetos funcionarios, 
// onde cada objeto contém informações como 
// nome, cargo, e salario. 
// Use for of para filtrar e exibir apenas os funcionários cujo 
// salário seja maior que um valor específico.

// Criando o Array de objetos representando funcionários
let Funcionarios = [
    {Nome: "Gabriel", Cargo: "Programador", Salario: 9940},
    {Nome: "Amanda", Cargo: "Desing", Salario: 2536},
    {Nome: "Teo", Cargo: "Desenvolvedor", Salario: 6027}
]

// Valor específico para filtrar salários
let ValorEspecifico = 6000

// Usando for...of para filtrar funcionários com salário maior que o valor específico
for (let Excecao of Funcionarios) {
    if (Excecao.Salario > ValorEspecifico) {

        // Exibe o nome, cargo e salário do funcionário
        console.log(`Nome: ${Excecao.Nome}, Cargo: ${Excecao.Cargo}, Salário: ${Excecao.Salario}`)
    }
}
