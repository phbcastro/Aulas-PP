const dados = {
    name: 'Paulo',
    idade: 24
}

const endereco = {
    cidade: 'Belem',
    estado: 'PA',
    ...dados
}

// Object.assign(dados, endereco);                   // faz a junção dos dois objetos, faz o mesmo que a função rest (...endereco) dentro do objeto 
// console.log(Object.keys(dados));                    // mostra as chaves do objeto
console.log(Object.values(endereco));                  //mostra os valores das chaves do objeto


// console.log(dados);