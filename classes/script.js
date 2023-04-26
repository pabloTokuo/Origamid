// CONSTRUCTOR FUNCTION
// Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.

// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const blueButton = new Button('Comprar', 'Blue');

// console.log(blueButton.element());

// CLASS
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe.

// class Button {
  // constructor(text, background) {
//     this.text = text;
//     this.background = background;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     const container = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     container.appendChild(this.element());
//     return targetElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue');
// console.log(blueButton.appendTo('body'));
// blueButton.appendTo('.container');

// PROPRIEDADES
// Podemos passar qualquer valor dentro de uma propriedade.

// STATIC VS PROTOTYPE
// Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array.

class Carro {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const ferrariOptions = {
  backgroundColor: 'red',
  color: 'white',
  text: 'Ferrari',
  borderRadius: '4px',
}

const ferrari = new Carro(ferrariOptions);
console.log(ferrari.options);