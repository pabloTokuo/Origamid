import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalStorage';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
