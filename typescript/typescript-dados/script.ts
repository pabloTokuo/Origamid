import Estatisticas from "./Estatisticas.js";
import { CountList } from "./countBy.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?');

  if(!data) return;
  const transacoes = data.map(normalizarTransacao)
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes)
}

function preencherLista(lista: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if(containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`
    })
  }
}

function preencherEstatisticas(transacoes: Transacao[]):void {
  const data = new Estatisticas(transacoes);

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');

  const totalElement = document.querySelector<HTMLElement>('#total span');
  if(totalElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const pagamentoElement = document.getElementById('pagamento');
  if(pagamentoElement) {
    Object.keys(data.pagamento).forEach(key => {
      pagamentoElement.innerHTML += `<p>${key}: ${data.pagamento[key]}</p>`
    })
  }
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector('#transacoes tbody');
  if(!tabela) return;
  transacoes.forEach((transacoes) => {
    tabela.innerHTML += `
      <tr>
        <td>${transacoes.nome}</td>
        <td>${transacoes.email}</td>
        <td>R$ ${transacoes.moeda}</td>
        <td>${transacoes.pagamento}</td>
        <td>${transacoes.status}</td>
      </tr>
    `
  });
  
}
handleData();