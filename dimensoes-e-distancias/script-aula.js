// HEIGHT E WIDTH
const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const width = listaAnimais.clientWidth;
console.log(height);

// OFFSETTOP E OFFSETLEFT
// // Distância entre o topo do elemento e o topo da página
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft; 

console.log(animaisLeft);

// GETBOUNDINGCLIENTRECT()
const rect = listaAnimais.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// WINDOW
console.log(window.innerHeight, window.outerHeight, window.innerWidth, window.outerWidth);

// if(window.innerWidth < 700) {
//   console.log("Tela menor que 700px");
// }

// matchMedia();
const small = window.matchMedia("(max-width: 700px)");

if(small.matches) {
  console.log("Tela menor que 700px");
} else {
  console.log("Tela maior que 700px");
}