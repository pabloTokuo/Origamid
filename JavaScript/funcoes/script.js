// Crie uma função para verificar se um valor é Truthy

function verificarValor(verificar) {
  return !!verificar;
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado + lado + lado + lado;
}

console.log(perimetroQuadrado(1, 1, 1, 1));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
  // `${nome} ${sobrenome};
}

console.log(nomeCompleto("Pablo", "Tokuo"));

// Crie uma função que verifica se um número é par

function verificarNumero(numero) {
  if(numero % 2 === 0) {
    return "par";
  } else {
    return "false";
  }
}

console.log(verificarNumero(4));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado(1));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function() {
  console.log("Pablo", "Tokuo");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));