// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']");

function handleLinks(event) {
  event.preventDefault();
  
  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  })

  event.currentTarget.classList.add("ativo");
  //this.classList.add
}


linksInternos.forEach((links) => { 
  links.addEventListener("click", handleLinks);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

// function handleElements(event) {
//   console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElements);
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElements(event) {
  event.currentTarget.remove();
  //this.remove();
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElements);
// })


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(e) {
  if(e.key === "e") {
    document.documentElement.classList.toggle("aumentar");
  }
}


window.addEventListener("keydown", handleClickT);