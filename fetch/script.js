// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById('cep');
const btn = document.getElementById('btn');
const divCep = document.querySelector('.resultadoCep');

btn.addEventListener('click', handleClick);

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  fetchCep(cep);
}

function fetchCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(r => r.text())
  .then(body => {
    divCep.innerText = body;
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function fetchBtc() {
  fetch('https://blockchain.info/ticker').then(r => r.json())
  .then(btcJson => {
    const preco = document.querySelector('.btc');
    preco.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

setInterval(fetchBtc, 30000);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const button = document.getElementById('btncky');
const piada = document.querySelector('.piada');

function norrisJoke() {
  fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
  .then(jokeJson => {
    piada.innerText = jokeJson.value;
  })
}

button.addEventListener('click', norrisJoke);