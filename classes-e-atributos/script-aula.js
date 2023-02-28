// CLASSLIST
const menu = document.querySelector(".menu");

menu.classList.add("Caneta", "ativo"); // add
menu.classList.remove("Caneta"); // remove
menu.classList.toggle("azul"); // add 
menu.classList.toggle("azul"); // remove

if(menu.classList.contains("azul")) {
  menu.classList.add("possuiAzul");
} else {
  menu.classList.add("naoPossuiAzul");
}

menu.className += " vermelho";

console.log(menu.className);

// ATTRIBUTES
const animais = document.querySelector(".animais");
console.log(animais.attributes.class);

// GETATTRIBUTE E SETATTRIBUTE
const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");
console.log(srcImg);

img.setAttribute("alt", "Urso");

const imgHas = img.hasAttribute("alt");
console.log(imgHas);

const imgRemove = img.removeAttribute("alt");