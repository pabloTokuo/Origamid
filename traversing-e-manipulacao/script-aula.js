// OUTERHTML, INNERHTML E INNERTEXT
const h1 = document.querySelector('h1');

h1.outerHTML; // todo o html do elemento
h1.innerHTML; // html interno
h1.innerText; // texto, sem tags

// h1.innerText = '<p>Texto</p>'; // a tag vai como texto
// h1.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// TRASVERSING
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

// ELEMENT VS NODE
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// MANIPULANDO ELEMENTOS
const contato = document.querySelector("#contato");
const titulo = contato.querySelector(".titulo");

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// NOVOS ELEMENTOS
const novoH1 = document.createElement("h1");
novoH1.innerHTML = "Novo H1";
novoH1.classList.add("titulo");

titulo.appendChild(novoH1);

// CLONAR ELEMENTOS
const final = document.querySelector(".copy");
const novoTitulo = novoH1;

const cloneTitulo = novoTitulo.cloneNode(true);

final.appendChild(cloneTitulo);