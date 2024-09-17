// 8. Criando Novos Arrays a Partir de Objetos:
// Objetivo: Crie um array de objetos filmes, onde cada filme tem 
// titulo, diretor, e anoLancamento. 
// Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

// Criando o Array de objetos representando Filmes com titulo, diretor, e anoLancamento. 
let Filmes = [
    {   Titulo: "Black Clover - A Espada do Rei Mago",
        Diretor: "Ayataka Tanemura",
        anoLancamento: 2023
    },
    {   Titulo: "My Hero Academia – Missão Mundial de Heróis",
        Diretor: "Kenji Nagasaki",
        anoLancamento: 2022
    },
    {   Titulo: "Demon Slayer: Para a Vila do Espadachim",
        Diretor: "Haruo Sotozaki",
        anoLancamento: 2024
    }
]

// Array para armazenar apenas os titulos
let TitulosFilmes = []

// Usando forEach para extrair os titulos
Filmes.forEach(function(Filme) {
    
    //Extraindo os titulos
    TitulosFilmes.push(Filme.Titulo)
    
})

// Exibindo o novo array de filmes
console.log(TitulosFilmes)
