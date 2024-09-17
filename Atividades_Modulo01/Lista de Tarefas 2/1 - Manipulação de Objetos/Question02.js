// 2. Verificando Propriedades:
// Objetivo: Crie um objeto livro com propriedades 
// titulo, autor, anoPublicacao e genero. 
// Verifique se a propriedade editora existe no
// objeto usando for in. 
// Se não existir, adicione essa propriedade ao objeto.

// Criando o objeto Livro
let Livro = {
    Titulo: "Solo Leveling",
    Autor: "Chugong",
    anoPublicacao: 2018,
    Genero: ["Ação", "Aventura", "Fantasia"] 
}

// Verifica se a propriedade "Editora" existe usando for...in
let existeEditora = false

for(let Propriedade in Livro){
    if (Propriedade === "Editora") {
        existeEditora = true // Define como verdadeiro se "Editora" for encontrada
        break  // Sai do loop se "Editora" foi encontrada
    } 
}

// Se "Editora" não foi encontrada após o loop, adiciona a propriedade
if (!existeEditora) {
    Livro.Editora = "Papyrus"; // Adiciona a propriedade Editora 
    console.log(Livro); // Exibe o objeto atualizado
}
