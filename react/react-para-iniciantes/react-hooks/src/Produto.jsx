import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  function handleClick() {
    global.setContar((numero) => numero + 1);
  }

  return (
    <div>
      Produto: {global.contar}
      <button onClick={() => global.adicionarDois()}>Adicionar</button>
    </div>
  );
};

export default Produto;
