// RESPONSE
// O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

// const doc = fetch('./doc.txt');

// doc.then((r)=> {
//   return r.text();
// }).then((body) => {
//   const conteudo = document.querySelector('.class-conteudo');
//   conteudo.innerText = body;
// })

// .JSON()se vc nuviacep.com.br/ws/01001000/json/');

cep.then(r => r.json())
.then(body => {
  console.log(body);
  const conteudo = document.querySelector('.class-conteudo');
  conteudo.innerText = body.cep;
})

// .TEXT()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

const style = fetch('./style.css');

style.then(r => r.text()).then(body => {
  const conteudo = document.querySelector('.class-conteudo');
  const style = document.createElement('style');
  style.innerHTML = body;
  conteudo.appendChild(style);
})

// .BLOB()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.

const imagem = fetch('./street.png');

imagem.then(r => r.blob()).then(body => {
  const bloblUrl = URL.createObjectURL(body);
  const imgDom = document.querySelector('img');
  imgDom.src = bloblUrl;
});