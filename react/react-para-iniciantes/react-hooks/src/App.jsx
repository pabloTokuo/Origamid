import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [dados, setDados] = React.useState();
  const [carregando, setCarregando] = React.useState();

  async function handleFetchClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );

    const json = await response.json();

    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: '.5rem' }} onClick={handleFetchClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleFetchClick}>
        Tablet
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleFetchClick}>
        Notebook
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
