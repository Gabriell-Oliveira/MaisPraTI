// 15. Filtrando e Somando Valores:
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. 
// Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

// Criando o array de objetos Representando transacoes com Tipo e Valor
let Transacoes = [
    { Tipo: "Entrada", Valor: 1000 },
    { Tipo: "Saída", Valor: 200 },
    { Tipo: "Entrada", Valor: 500 },
    { Tipo: "Saída", Valor: 300 },
    { Tipo: "Entrada", Valor: 150 },
];

// Variável para armazenar o saldo final
let SaldoFinal = 0;

// Usando forEach para calcular o saldo final
Transacoes.forEach(function(Transacao) {
    // Verifica se a transação é uma entrada ou uma saída
    if (Transacao.Tipo === "Entrada") {
        SaldoFinal += Transacao.Valor; // Somar entradas
    } else if (Transacao.Tipo === "Saída") {
        SaldoFinal -= Transacao.Valor; // Subtrair saídas
    }
});

// Exibe o saldo final no console
console.log(`O saldo final é: R$ ${SaldoFinal}`);
