// FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

// FUNÇÕES

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi());

// PARÂMETROS E ARGUMENTOS

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.80));
console.log(imc(60, 1.68));

// PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if (cor == "azul") {
    return "Voce gosta do ceu";
  } else if (cor == "verde") {
    return "Voce gosta do mato";
  } else {
    return "Voce nao gosta de nada";
  }
}

console.log(corFavorita());

// ARGUMENTOS PODEM SER FUNÇÕES

addEventListener("click", function() {
  console.log("Clicou");
});

// VALORES RETORNADOS

function terceiraIdade(idade) {
  if(typeof idade !== "number") {
    return "Informe sua idade";
  }
  if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

// ESCOPO

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises para visitar`
}

// ESCOPO LÉXICO

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// HOISTING

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
