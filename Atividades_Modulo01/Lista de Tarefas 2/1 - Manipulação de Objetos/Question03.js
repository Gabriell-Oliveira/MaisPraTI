// 3. Filtrando Propriedades de Objetos: 
// Objetivo: Dado um objeto produto com várias propriedades, 
// crie uma função que retorna um novo objeto 
// contendo apenas as propriedades cujo valor seja maior que um valor específico. 
// Use for in para filtrar as propriedades.

// Criando o objeto Produto com várias propriedades
let Produto = {
    Nome: "Regata",
    Marca: "Nike",
    Preco: 109.99,
    Estoque: 50,
    Avaliação: 4.8
}

// Função que filtra propriedades numéricas maiores que um valor específico
function filtrarPropriedades (Objeto, valorEspecifico) {
   
    let novoObjeto = {} // Cria um novo objeto vazio para armazenar as propriedades filtradas

    // Loop for...in para iterar sobre as propriedades do objeto original
    for(let Propriedade in Objeto) {

        // Verifica se o valor da propriedade é numérico e maior que o valor especificado
        if (typeof Objeto[Propriedade] === "number" && Objeto[Propriedade] > valorEspecifico) {
            
            // Se a condição for verdadeira, a propriedade é adicionada ao novo objeto
            novoObjeto[Propriedade] = Objeto[Propriedade]
        }
    }

    return novoObjeto // Retorna o novo objeto contendo as propriedades filtradas
}

// Chamando a função e passando o objeto Produto e o valor específico (49)
let resultado = filtrarPropriedades(Produto, 49)
console.log(resultado) // Exibe o novo objeto filtrado no console
