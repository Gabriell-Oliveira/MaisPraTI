// 10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem 
// produto, quantidade e valor. 
// Use forEach para calcular o valor total de vendas de todos os produtos.

// Criando o array de objetos Representando Vendas com produto, quantidade e valor. 
let Vendas = [
    { Produto: "Lápis",
        Quantidade: 25,
        Valor: 2
    },
    { Produto: "Borracha",
        Quantidade: 15,
        Valor: 3
    },
    { Produto: "Caderno",
        Quantidade: 14,
        Valor: 25
    },
    { Produto: "Mochila",
        Quantidade: 12,
        Valor: 150
    }
]

// Variável para armazenar o valor total das vendas de todos os produtos
let Relatorio2 = 0

// Iteração sobre cada item do array "Vendas" usando forEach
Vendas.forEach(function(Venda) {

    // Calcular o valor total vendido para o produto atual
    let Relatorio = Venda.Quantidade * Venda.Valor

    // Adicionar o valor total vendido para o produto ao total geral
    Relatorio2 += Relatorio
    
    // Exibir o valor total vendido de cada produto
    console.log(`O produto ${Venda.Produto}, vendeu: R$ ${Relatorio}`)
})
// Exibe o valor total das vendas de todos os produtos
console.log(`O Relatório das vendas de todos os produtos é: R$ ${Relatorio2}`)
