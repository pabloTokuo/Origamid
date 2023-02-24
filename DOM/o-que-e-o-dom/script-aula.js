// WINDOW E DOCUMENT

const href = window.location.href;
console.log(href);

if(href === "http://127.0.0.1:5500/DOM/o-que-e-o-dom/index.html") {
  // window.alert("Verdadeiro");
}



// NODE
const h1Selectionado = document.querySelector("h1"); // Seleciona h1
const h1Classes = h1Selectionado.classList; // Seleciona classes h1

function callBackh1() { // Funcao que retornar o texto ao clicar
  console.log("Clicou", h1Selectionado.innerText);
}

h1Selectionado.addEventListener("click", callBackh1); // Quantas vezes clicou no h1