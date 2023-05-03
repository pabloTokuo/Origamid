import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);
  const [items, setItems] = React.useState(['Item 1']);
  const [contar, setContar] = React.useState(1);

  const handleClick = () => {
    setContar(contar + 1);
    setItems([...items, 'Item ' + (contar + 1)]);
  };

  return (
    <div>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
