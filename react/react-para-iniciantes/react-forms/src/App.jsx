import React from 'react';

function App() {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form action="">
      <textarea
        value={textarea}
        rows="5"
        onChange={({ target }) => setTextarea(target.value)}
      ></textarea>
      {textarea}
    </form>
  );
}

export default App;
