import React, { useState } from 'react';
import Modal from './Modal';

function CustomModal() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {showModal && (
        <Modal
          onClose={handleClose}
          header="25 React Projects"
          body="A collection of small React projects."
          footer="madhavarayulu.github.io"
        />
      )}
    </div>
  );
}

export default CustomModal;
