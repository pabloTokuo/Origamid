// ADDEVENTLISTENER
const img = document.querySelector("img");

// img.addEventListener("click", () => { // ao clicar na imagem vai aparecer "Clicou"
//   console.log("Clicou");
// })

// CALLBACK
const titulo = document.querySelector("h1");

function callback() {
  console.log("Clicou");
}

// titulo.addEventListener("click", callback);

// EVENT
function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector(".animais-lista");

function listaCallBack(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

// animaisLista.addEventListener("click", listaCallBack);

// EVENT.PREVENTDEFAULT() 
const linkExterno = document.querySelector("a[href^='http']")

function handleLinkExterno(event) {
  event.preventDefault(); // Prevenir que o link externo seja ativado
  console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);

// DIFERENTES EVENTOS

function handleEvent(event) {
  console.log(event.type, event)
}

// titulo.addEventListener("mouseenter", handleEvent);
// titulo.addEventListener("mousemove", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);
// window.addEventListener("keydown", handleEvent);

// KEYBOARD
function handleKeyboard(event) {
  if(event.key === "a") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handleKeyboard);

// FOREACH E EVENTOS
const imgs = document.querySelectorAll("img");

function imgSrc(e) {
  const src = e.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
})