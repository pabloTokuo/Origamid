import React, { useState, useEffect } from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [nomeProduto, setProduto] = useState(null);

  useEffect(() => {
    const localStore = window.localStorage.getItem('ultimoProduto');
    setProduto(localStore);
  }, []);

  useEffect(() => {
    if (nomeProduto !== null)
      window.localStorage.setItem('ultimoProduto', nomeProduto);
  }, [nomeProduto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferencia: {nomeProduto}</h1>
      <button style={{ marginRight: '0.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={nomeProduto} />
    </div>
  );
};

export default App;
