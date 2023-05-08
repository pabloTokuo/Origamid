import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading === true) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={({ target }) => setProduto(target.innerText)}>
          notebook
        </button>
        <button onClick={({ target }) => setProduto(target.innerText)}>
          smartphone
        </button>

        {data.map((produto, index) => (
          <div key={index}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
