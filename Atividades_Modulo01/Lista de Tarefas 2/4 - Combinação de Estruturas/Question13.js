// 13. Implementando um Carrinho de Compras:
// Objetivo: Crie um objeto carrinho com uma propriedade 
// itens, que é um array de objetos. 
// Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. 
// Use forEach para calcular o valor total do carrinho.

// Criando o obejeto Carrinho com uma propriedade Itens que é
// array de objetos Representando com nome = produto, quantidade, e precoUnitario = precoUnico.
let Carrinho = {
    Itens: [
        {Produto: "Detergente",
            Quantidade: 5,
            PrecoUnico: 4.50
        },
        {Produto: "Esponja",
            Quantidade: 8,
            PrecoUnico: 9.50
        },
        {Produto: "Pano de prato",
            Quantidade: 10,
            PrecoUnico: 16
        }
    ]
}

// Variavel para armazenar o valor total do carrinho
let ValorTotal = 0

// Usando forEach para calcular o valor total do carrinho
Carrinho.Itens.forEach(function(Item) {

    // Calcular o lavor dos itens 
    let ValorDoItem = Item.Quantidade * Item.PrecoUnico

    // Adicionar o valor total ao valor total do carrinho
    ValorTotal += ValorDoItem
})

// Exibir o valor total do carrinho
console.log (`O valor total do carrinho de compras é: ${ValorTotal}`)
