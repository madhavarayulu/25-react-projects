import React from 'react';
import './modal.css';

function Modal({ header, body, footer, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="modal-header">
          <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="modal-body">
          <p>{body ? body : 'This is modal-body placeholder.'}</p>
        </div>
        <div className="modal-footer">
          <h5>{footer ? footer : 'Footer'}</h5>
        </div>
      </div>
    </div>
  );
}

export default Modal;
