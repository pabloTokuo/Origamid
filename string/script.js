// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "") // limpar a string pra apenas numeros
  if(item.descricao.slice(0, 4) === "Taxa") { // Se a descricao do item comecar com "Taxa"
    taxaTotal += numeroLimpo; // vai somar 
  } else {
    recebimentoTotal += numeroLimpo;
  }
})


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayitens = transportes.split(";");

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");         

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
frase[frase.length-1];

// Retorne o total de taxas
let transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let i = 0;

transacoes2.forEach((item) => {
  item = item.toLowerCase();
  if(item.includes("taxa")) {
    i++;
  }
})

console.log(i);