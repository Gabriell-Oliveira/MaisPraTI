// 5. Calculando Valores em Arrays de Objetos:
// Objetivo: Crie um array de objetos alunos, 
// cada um com propriedades
// nome, nota1, e nota2. 
// Use for of para calcular a 
// média das notas de cada aluno e 
// exibir o nome do aluno junto com sua média.

// Criando o Array de objetos representando alunos, com suas notas
let Alunos = [
   { Nome: "Gabriel",
        Nota1: 8,
        Nota2: 6 },
   { Nome: "Amanda",
        Nota1: 10,
        Nota2: 8 }
]

// Usando for...of para iterar sobre o array de alunos e calcular a média
for (let Boletim of Alunos){

    // Calcula a média das notas de cada aluno
    let Media = (Boletim.Nota1 + Boletim.Nota2) / 2

    // Exibe o nome do aluno(a) e sua média
    console.log(`O Aluno(a) ${Boletim.Nome} está com a média: ${Media}`)
}
