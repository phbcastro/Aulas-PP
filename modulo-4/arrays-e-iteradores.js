const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata', '']
const precos = [3.50, 5, 3.50, 2, 2.50, 0];
const pessoas = [{nome: 'Paulo', idade: 24}, {nome: 'Julia', idade: 21}]

estoque.forEach((valor, index, array) => {
    console.log(valor, index, array)
})

const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`
})
console.log(retornoMap);

precos.reduce((acc, valor, index, array) => {  //acumula o total de valores
    return acc + valor;
}, 0)

estoque.find((valor, index, array) => {  //retorna o 1º valor true
    return valor;
})

estoque.findIndex((valor, index, array) => {
    return valor;
})

estoque.some((valor, index, array) => valor); //retorna true se pelo menos 1 item retornar true (tiver algo neles)

estoque.every((valor, index, array) => valor);   //só retorna true se TODOS os itens retornarem true (tiver algo neles)

estoque.filter((valor, index, array) => valor === 'arroz');