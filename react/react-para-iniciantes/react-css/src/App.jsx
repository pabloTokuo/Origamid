import React from 'react';
import foto from './img/foto.jpg';
import DogSvg from './DogSvg';

function App() {
  const [olho, setOlho] = React.useState(0);

  function handleClick() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 100 * i);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Aumentar Olho</button>
      <DogSvg color={'tomato'} olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
}

export default App;
