// 7. Modificando Objetos em um Array:
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem 
// nome, preco, e desconto. 
// Use forEach para aplicar um desconto de 10% em todosos produtos e 
// exibir o novo preço.

// Criando o Array de objetos representando Produtos com várias propriedades
let Produtos = [
    {Nome: "Notebook", Preco: 2539.99, Desconto: 10 },
    {Nome: "SmartPhone", Preco: 2078.98, Desconto: 10 },
    {Nome: "SmartWatch", Preco: 274.99, Desconto: 10 }
]

// Iteração sobre cada item do array "Produtos" usando forEach
Produtos.forEach(function(Produto) {
   
    // Cálculo do preço com desconto para cada produto
    let PrecoComDesconto = Produto.Preco - (Produto.Preco * Produto.Desconto / 100)

    // Exibe o nome do produto e o preço com desconto, formatado com 2 casas decimais
    console.log(`Nome: ${Produto.Nome}, Preço com Desconto: R$ ${PrecoComDesconto.toFixed(2)}`)
})
