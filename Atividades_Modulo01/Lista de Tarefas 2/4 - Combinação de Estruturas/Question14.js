// 14. Manipulando Objetos Complexos:
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. 
// Cada departamento tem um nome e uma lista de funcionarios. 
// Use for in e for of para iterar sobre os 
// departamentos e seus funcionários, 
// exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

// Criando o obejeto Empresa com uma propriedade Departamentos que é
// array de objetos Representando com Nome e Funcionários.
let Empresa = {
    Departamentos: [
        {   Nome: "TI",
            Funcionarios: ["Daniel", "Darquio", "Teofilo"]
        },
        {   Nome: "Financeiro",
            Funcionarios: ["Gabriel", "Victor", "Deocleciano"]
        },
        {   Nome: "Marketing",
            Funcionarios: ["Amanda", "Clara"]
        },
    ]
}

// Usando for in para iterar sobre os departamentos
for(let i in Empresa.Departamentos) {

    //Pegando o nome do departamento atual
    let Departamento = Empresa.Departamentos[i]

    // Usando for of para iterar sobre os funcionários de cada departamento
    for (let Funcionario of Departamento.Funcionarios) {

        // Exibir o nome dos funcionários e o departamento ao qual pertence
        console.log(`Funcionário(a): ${Funcionario} faz parte do Departamento: ${Departamento.Nome}`)
    }
}
