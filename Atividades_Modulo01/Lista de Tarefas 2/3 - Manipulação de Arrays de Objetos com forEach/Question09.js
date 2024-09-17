// 9. Contabilizando Elementos com uma Condição:
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. 
// Use forEach para contar quantos clientes têm mais de 30 anos.

// Criando o Array de objetos representando Clientes com nome, idade e cidade
let Clientes = [
    { Nome: "Gabriel",
        Idade: 35,
            Cidade: "Porto"
    },
    { Nome: "Amanda",
        Idade: 33,
            Cidade: "Porto"
    },
    { Nome: "Darquio",
        Idade: 29,
            Cidade: "Lisboa"
    },
    { Nome: "Clara",
        Idade: 28,
            Cidade: "Lisboa"
    },
    { Nome: "Teofilo",
        Idade: 38,
            Cidade: "Downtown Dubai"
    }
]

// Variável para contar Clientes com mais de 30 anos
let Trinta = 0

// Usando forEach para iterar sobre o array de clientes
Clientes.forEach(function(Cliente) {

    // Se a idade do cliente for maior que 30, incrementa no contador
    if (Cliente.Idade > 30)
        Trinta++;
})

// Exibindo o resultado.
console.log(`O número de clientes com mais de 30 anos são: ${Trinta}`)
