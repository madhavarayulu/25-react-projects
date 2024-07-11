import React, { useState } from 'react';
import './qr-code-generator.css';
import QRCode from 'react-qr-code';

function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerate() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className='qr-code-container'>
      <div className='user-input'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
