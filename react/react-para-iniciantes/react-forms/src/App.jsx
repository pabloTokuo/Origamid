import React from 'react';

function App() {
  const [radio, setRadio] = React.useState('');

  return (
    <form action="">
      <label>Notebook</label>
      <input
        type="radio"
        value="notebook"
        name="produto"
        onChange={({ target }) => setRadio(target.value)}
      />
      <label>Smartphone</label>
      <input
        type="radio"
        value="smartphone"
        name="produto"
        onChange={({ target }) => setRadio(target.value)}
      />
      {radio}
    </form>
  );
}

export default App;
