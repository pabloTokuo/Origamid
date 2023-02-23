// OBJETOS

var pessoa = {
  nome: "Pablo",
  idade: 26
}

console.log(pessoa);

// MÉTODOS

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));

// CRIAR UM OBJETO
var carro = {}
var pessoa = {}

console.log(typeof carro);

// DOT NOTATION GET
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
}

menu.backgroundColor = "#000";
menu.color = "blue";

var bg = menu.backgroundColor; 