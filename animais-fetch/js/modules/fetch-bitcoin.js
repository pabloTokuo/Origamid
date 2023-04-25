export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const dadosFetch = await fetch(url);
      const dadosJSON = await  dadosFetch.json();
    
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / dadosJSON.BRL.sell).toFixed(4);
    } catch(error) {
      console.log(error);
    }
  }
  
  fetchBitcoin('https://blockchain.info/ticker');
}