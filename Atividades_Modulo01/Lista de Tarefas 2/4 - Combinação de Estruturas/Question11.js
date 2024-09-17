// 11. Agrupando Elementos com forEach:
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. 
// Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

// Criando o array de objetos Representando Pedidos com cliente, produto, e quantidade. 
let Pedidos = [
    {Cliente: "Darquio", Produto: "Lápis", Quantidade: 7},
    {Cliente: "Clara", Produto: "Borracha", Quantidade: 4},
    {Cliente: "Teofiolo", Produto: "Caderno", Quantidade: 2},
    {Cliente: "Clara", Produto: "Lápis", Quantidade: 5},
    {Cliente: "Darquio", Produto: "Mochila", Quantidade: 1},
]

// Objeto para armazenar a quantidade total de produtos por clientes
let Total = {}

// Usando forEach para agrupar a quantidade total de produtos por clientes
Pedidos.forEach(function(Pedido) {

    // Se o cliente já existe no objeto "Total", soma a quantidade
    if (Total[Pedido.Cliente]) {
        Total[Pedido.Cliente] += Pedido.Quantidade
    } 
    // Caso contrario, criar uma nova entrada para o cliente com a quantidade inicial
    else {
        Total[Pedido.Cliente] = Pedido.Quantidade
    }
})

// Mostrar o resultado 
console.log(Total)
