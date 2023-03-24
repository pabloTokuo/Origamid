// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const seletor = document.querySelectorAll("section p");

const array = Array.from(seletor);

const totalCaracteres = array.reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0)

// const totalCaracteres = Array.prototype.reduce.call(seletor, (acumulador, item) => {
//   return acumulador + item.innerText.length;
// }, 0);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento("div", "ativo", "Teste"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo", "Cursos de JavaScript");

console.log(h1Titulo());