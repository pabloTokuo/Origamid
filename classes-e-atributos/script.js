// Adicione a classe ativo a todos os itens do menu
const classeAtivo = document.querySelectorAll(".menu a");
classeAtivo.forEach((item) => {
  item.classList.add("ativo");
  console.log(item);
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
classeAtivo.forEach((item) => {
  item.classList.remove("ativo");
  console.log(item);
})

classeAtivo[0].classList.add("ativo");
console.log(classeAtivo);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute("alt"); 
  console.log(possuiAtributo);
})


// Modifique o href do link externo no menu
const externo = document.querySelector("a[href^='http']");

externo.setAttribute("href", "teste123");