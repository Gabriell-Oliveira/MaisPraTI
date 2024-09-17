// 12. Atualizando um Array de Objetos:
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. 
// Use forEach para atualizar a 
// quantidade dos produtos que estão abaixo do mínimo, 
// duplicando suas quantidades.

// Criando o array de objetos Representando Estoque com produto, quantidade e minimo.
let Estoque = [
    {Produto: "Notebook", Quantidade: 15, Mimimo: 10},
    {Produto: "SmartPhone", Quantidade: 8, Mimimo: 15},
    {Produto: "SmartWatch", Quantidade: 12, Mimimo: 20},
]

// Usando forEach para verificar e atualizar os produtos abaixo do mínimo
Estoque.forEach(function(Itens){

    // Se a Quantidade do produto estiver abaixo do mínimo, duplicar a Quantidade
    if (Itens.Quantidade < Itens.Mimimo){
        Itens.Quantidade *= 2 // Duplica a quantidade
    }
})

// Exibir o Estoque atualizado
console.log(Estoque)
