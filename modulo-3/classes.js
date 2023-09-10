class Mamifero {
    constructor() {
        this.especie = 'Mamíferos';
    }

    dormir(){
        alert('Esse mamífero dormiu')
    }
}


class Pessoa extends Mamifero{
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
        this.cidade = 'Belem'
    }

    dormir() {
        super.dormir();
    }

    andou() {
        alert(`${this.name} andou`);
    }
}

const pessoa1 = new Pessoa ('Paulo', 24);
