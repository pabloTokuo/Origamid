// ID

const animais = document.getElementById("animais");
console.log(animais);

// CLASSE E TAG

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[2]);

// SELETOR GERAL ÚNICO

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// SELETOR GERAL LISTA

const animaisImg = document.querySelectorAll('.grid-section img');
console.log(animaisImg[1]);

// HTMLCOLLECTION VS NODELIST

const gridSectionHTML = document.getElementsByClassName('grid-section'); // att ao vivo
const gridSectionNode = document.querySelectorAll('.grid-section'); // nao att

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
  console.log(item ,index);
})

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item, index) {
  console.log(item, index);
})