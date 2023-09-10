// Fetch 
// http
//then e catch

// é com uma requisição http que vamos conseguir enviar, receber, deletar, alterar um determinado valor

// adicionar um novo usuario

// font end --> fetch --> http --> back end --> banco de dados

// Verbos HTTP 
// GET      --> Quando o client solicita algum dado
// POST     --> Queremos enviar algum dado a partir do client
// DELETE   --> Queremos deletar algum dado específico
// PATCH    --> Alterar um dado mais abrangente
// PUT      --> alterar algum dado específico

//CRUD --> Create, Read, Update, Delete

// Endpoint --> nada mais é que uma URL
// O responsável por criar os endpoints e denominar a responsabilidade de cada endpoint é o back end 

// um Endpoint para criar um usuário
// um Endpoint para deletar um usuário
// um Endpoint para alterar dados de um usuario

//https//api.coingecko.com/api/v3/exchange_rates

// HTTP --> 4 tipos de parâmetros em uma requisição HTTP

// Route Params
// Query Params
// Body Params
// Header Params

// CORS 

fetch('https://api.coingecko.com/api/v3/exchange_rates', 
{ 
    mode: 'cors',
    method: 'POST',
    body: {
        name: 'Paulo',
        age: '24'
    },
    headers: {

    }
}).then((data) => {
    console.log(data);
})

// Status
// Sucesso              200 - 299
// Redirecionamento     300 - 399
// erro no client       400 - 499
// erro do servidor     500 - 599

// JSON - JAVASCRIPT OBJECT NOTATION

const obj = '{"name": "paulo", "age": 24}'

const obj2 = {
    name: paulo,
    age: 24
}

JSON.parse(obj); // transforma um string em formato de json em um objeto javascript
JSON.stringify(obj2); // vai pegar um objeto javascript e transformar em uma string