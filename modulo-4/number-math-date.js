const numero = 10;
const string = '20.9';
const numeroQuebrado = 10.8;




//retornamos um number a partir de uma string
Number.parseFloat(string); //20.9

// retornamos um número a partir de uma string, podendo definir a casa decimal
Number.parseInt(string, 10); // 20

// // retornamos um número com base nas casas decimais
numeroQuebrado.toFixed(); // 11

// // retorna uma string a partir de um numero
numero.toString(); '10'


// // Math --> Objeto nativo do JAVASCRIPT que possui métodos e propriedades de expressões matemáticas

// // retorna o valor absoluto
Math.abs(-5); // 5

// // arredonda o valor para cima
Math.ceil(numeroQuebrado); // 11

// // arredonda o valor para baixo
Math.floor(numeroQuebrado); // 10

// // arredonda para o numero mais proximo
Math.round(numeroQuebrado); // 11

// // retorna um numero aleatorio entre 0 e 1
console.log((Math.random() * 500).toFixed()); //valor aleatorio entre 0 e 500

// // retorna o maior numero entre os listados
Math.max(2, 5, 3, 45, 211, 52); // 211

// // retorna o menor numero entre os listados
Math.min(2, 5, 3, 45, 211, 52); // 2


const hoje = new Date();

hoje.getDate(); // que dia é hoje

hoje.getMonth();

hoje.getFullYear();

console.log(`${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`); //juntando para conseguir a hora completa

hoje.getMinutes();

hoje.getDay(); //dia da semana em inglês