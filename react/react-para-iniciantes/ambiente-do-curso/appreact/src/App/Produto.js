import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid black', margin: '1rem 0' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
