// sincrono -> processamento que acontece em sequencia -> ordenado

// Assincrono -> os processos podem acontecer ao mesmo tempo

//Promises

const minhaPromise = new Promise( (resolve, reject)=> {
    let condicao = false;

    if(condicao) {
        resolve('Resolvido');
    } else {
        reject(Error('Um erro aconteceu na nossa promise'));
    }
})


// then e o catch (callbacks para resolve e reject, respectivamente)


minhaPromise.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})