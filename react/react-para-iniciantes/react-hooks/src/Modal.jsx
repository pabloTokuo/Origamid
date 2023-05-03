import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div>
        <p>Esse e um modal</p>
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  }
};

export default Modal;
