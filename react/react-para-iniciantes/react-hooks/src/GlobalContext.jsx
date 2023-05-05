import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarDois() {
    setContar(() => contar + 2);
  }

  return (
    <GlobalContext.Provider value={{ contar, setContar, adicionarDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
