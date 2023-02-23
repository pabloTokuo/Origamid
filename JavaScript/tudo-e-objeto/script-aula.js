// TUDO É OBJETO
var nome = 'Pablo';

nome.length;
nome.charAt(1);
nome.replace('ab', 'ba');
nome;

// NÚMEROS
var altura = 1.68;

console.log(altura.toString());
console.log(altura.toFixed());

// ELEMENTOS DO DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})