
function retornaNome(name,idade) {
    const user = {
        name: name,
        idade: idade,
        }
    console.log(user, this.profissao, this.cidade);
}

// retornaNome.length;
// retornaNome('Paulo', 22).name;

 
// retornaNome.call({profissao: 'editor', cidade: 'Belem'}, 'Paulo', 24);         //executa a função podendo passar um novo valor para this
// retornaNome.apply({profissao: 'editor', cidade: 'Belem'}, ['Paulo', 22]);        //executa a função podendo passar um novo valor para this, agora com os argumentos são passados em um array
const novoArray = retornaNome.bind({profissao: 'editor', cidade: 'Belem'}, 'Paulo', 24);         //retorna a função podendo passar um novo nome para this

novoArray();

// uma variavel criada fora pode ser acessada dentro da função. 
// uma variavel criada dentro de uma função não pode ser acessada fora
// const e let não 'vazam' para fora das funções

const valor = 'Paulo';

function teste() {
console.log(valor);
}

teste();