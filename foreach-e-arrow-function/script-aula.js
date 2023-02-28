// FOREACH
const imgs = document.querySelectorAll("img");

imgs.forEach(function(item, index, array) {
  console.log(item, index, array);
})

// FOREACH E ARRAY
const titulos = document.getElementsByClassName("titulo"); // transformar em um Array
const titulosArray = Array.from(titulos); // usar Array.From

titulosArray.forEach(function(item, index, array) {
  console.log(item, index, array);
})

// ARROW FUNCTION
imgs.forEach((item) => {
  console.log(item);
})

//imgs.forEach((item) => console.log(item)); 