// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector("img");

const imagemTopo = primeiraImagem.offsetTop;
console.log(imagemTopo);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const todasImg = document.querySelectorAll("img");
  let soma = 0;

  todasImg.forEach((img) => {
    soma += img.offsetHeigth;
  })
  console.log(soma);
}

// Funcao somaImagens so vai acontecer quando o site carregar primeiro
window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  // const linkWidth = link.offsetWidth;
  // const linkHeigth = link.offsetHeight;
  // console.log(linkHeigth, linkWidth);

  const rect = link.getBoundingClientRect();
  const widthLink = rect.width;
  const heightLink = rect.height;
  console.log(widthLink, heightLink);
  if(widthLink >= 48 && heightLink >= 48) {
    console.log(link, "Maior que 48");
  } else {
    console.log(link, "Menor que 48");
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia("(max-width: 720px)");
const menuNav = document.querySelector(".menu");

if(browser.matches) {
  menuNav.classList.add("menu-mobile");
} 