// Dataset
//Dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.


let div = document.querySelector("[data-cor]");
div.dataset.tempo = 1000;
div.dataset.cor;

console.log(div.dataset.tempo);

delete div.dataset.tempo;


// DATA ATRIBUTES
// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

const divs = document.querySelectorAll("[data-anima]");
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
})

// DATA VS CLASS
// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada. 

// NOMENCLATURA
// Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo
