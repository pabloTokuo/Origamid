const pessoa = {
  nome: "Pablo",
  idade: 26,
}


// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// honda.init('Honda').acelerar();

// const ferrari = Object.create(carro).init("Ferrari");

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// const carro = {
//   rodas: 4,
//   mala: true,
// }

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

// OBJECT.DEFINEPROPERTIES()
const personagem = {}

Object.defineProperties(personagem, {
  nome: {
    value: "Naruto",
  }
})

personagem.nome = "Sasuke";

console.log(personagem);

// GET E SET
const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200


const xadrez = {}
Object.defineProperties(xadrez, {
  pecas: {
    get() {
      return this._pecas;
    },
    set(nome) {
      this._pecas = "Nome da peca: " + nome;
    }
  }
})

xadrez.pecas = "Bispo";
xadrez.pecas;

/*
Object.getOwnPropertyDescriptors(obj)
Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
*/

Object.getOwnPropertyDescriptors(personagem);

/*
Object.keys(obj), Object.values(obj) Object.entries(obj)
Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
*/

Object.keys(pessoa);
Object.values(pessoa);
Object.entries(pessoa);

// Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames(pessoa);

// Object.getPrototypeOf() e Object.is()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
Object.getPrototypeOf(pessoa);
Object.is(xadrez, pessoa);

//Object.freeze(), Object.seal(), Object.preventExtensions()
//Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro = {
  marca: "Ford",
  ano: 2018
}

Object.freeze(carro)
Object.seal(carro);
Object.preventExtensions(carro);
carro.cor = "Azul";

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // true

// Propriedades e Métodos do Protótipo
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const frase = "Isso 'e uma String";
frase.constructor;

// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

xadrez.hasOwnProperty("cores"); // false
personagem.hasOwnProperty("nome"); // true

xadrez.propertyIsEnumerable("pecas"); // false
window.propertyIsEnumerable("innerHeight"); // true

// {}.isPrototypeOf(valor)
// Verifica se é o protótipo do valor passado.

const frutas = ["Banana", "Uva"];

Array.prototype.isPrototypeOf(frutas); // true
Array.prototype.isPrototypeOf(xadrez); // false

// {}.toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
