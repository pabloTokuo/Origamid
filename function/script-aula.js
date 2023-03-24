//PROPRIEDADES
function somar(n1, n2) {
  return n1+n2;
}

console.log(somar.length);

//FUNCTION.CALL()
const personagem = {
  nome: "Naruto",
  vila: "Folha"
}

function sobrePersonagem() {
  console.log(this.nome + " " + this.vila);
}

sobrePersonagem(); // undefined undefined
sobrePersonagem.call(); // undefined undefined
sobrePersonagem.call(personagem); // Naruto Folha


const animes = ["Naruto", "One Piece", "Attack on Titan"];

// animes.forEach((item) => {
//   console.log(item);
// })

// animes.forEach.call(animes, (item) => {
//   console.log(item);
// })

const personagens = ["Naruto", "Luffy", "Eren"];

// animes.forEach.call(personagens, (item) => {
//   console.log(item);
// })

// EXEMPLO REAL

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista);

// O OBJETO DEVE SER PARECIDO
const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');

// Arrays e Call
Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutas = ['Uva', 'Maçã', 'Banana'];
frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas); // Remove Banana
frutas.pop(); // Mesma coisa que a função acima

// Array Like
const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo

// FUNCTION.APPLY()
const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

// FUNCTION.BIND()
const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();

// ARGUMENTOS E BIND
const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carro.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10

// ARGUMENTOS COMUNS
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6
