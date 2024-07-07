import { useState } from 'react';
import './random-color.css';

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [colorValues, setColorValues] = useState({
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
  });

  function genRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {
      hex: `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`,
      rgb: `rgb(${r}, ${g}, ${b})`,
    };
  }

  const handleGenerateColor = () => {
    const newColor = genRandomColor();
    setColorValues(newColor);
  };

  return (
    <div style={{ background: colorValues.hex }} className="container">
      <div className='button-container'>
        <button onClick={handleGenerateColor}>Generate Random Color</button>
        <button onClick={() => setTypeOfColor('hex')}>Get HEX Code</button>
        <button onClick={() => setTypeOfColor('rgb')}>Get RGB Code</button>
      </div>
      <div>
        <h1>{typeOfColor === 'rgb' ? colorValues.rgb : colorValues.hex}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
