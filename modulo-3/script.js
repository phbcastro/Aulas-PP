const Paulo = {
    completeName: 'Paulo Henrique Barros de Castro',
    idade: 24,
    showMessage: function(){
        alert('Paulo tem 24 anos e mora no Pará')
        return true;
    },
    estado: 'Pará'
}

console.log(Paulo.completeName)
console.log(Paulo.idade)
console.log(Paulo.showMessage())


const object = {
    name: 'Paulo',
    idade: 24,
    cidade: 'Belém'
}

for (key in object) {
    console.log(key, ':', object[key]);
}