let idade: number = 22;

idade = 30;

// -------------------------------- // 

function mostrarNome (name:string) {
    alert(name)
}

// -------------------------------- // 

// string, boolean, number, array, tuple, null e undefined, object, enum, any (não usar), void

// -----------array----------- // 

const nome: number[] = [1, 2, 3, 4];
const string: string[] = ['1', '2', '3', '4'];

const string2: Array<string> = ['1', '2', '3', '4'];

// -----------tuple----------- // 

const string3: [string, number, boolean] = ['1', 2, false];

// -----------object----------- // 

type pessoa = {
    nome: string,
    idade: number,
    cidade: string
}


const usuario: pessoa = {
    nome: 'Paulo',
    idade: 22,
    cidade: 'Fortaleza'
}

// -----------enum----------- // 

enum cores {
    WHITE = '#FFF',
    BLACK = '#000',
    GRAY = '#F2F2F2'
}