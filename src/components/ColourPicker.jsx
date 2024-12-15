import React from 'react';

const ColorPicker = ({ handleColorChange }) => {
  return (
    <input
      type="color"
      onChange={(e) => handleColorChange(e.target.value)}
      title="Choose your color"
      style={{
        width: '36px',
        height: '36px',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent'
      }}
    />
  );
};

export default ColorPicker;
