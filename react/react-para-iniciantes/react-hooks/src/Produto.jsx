import React from 'react';
import { GlobalContext } from './GlobalStorage';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;
  return (
    <div>
      {global.dados.map((produto, index) => (
        <div key={index}>
          <li>{produto.nome}</li>
          <p>{produto.preco}</p>
        </div>
      ))}
      <button onClick={() => global.limparDados()}>Limpar Dados</button>
    </div>
  );
};

export default Produto;
