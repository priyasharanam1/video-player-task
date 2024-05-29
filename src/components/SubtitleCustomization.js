import React, { useState } from 'react';
import { Typography, Slider, Select, MenuItem } from '@mui/material';

const SubtitleCustomization = ({ onChange }) => {
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#ffffff');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
    onChange({ fontSize: newValue, color, backgroundColor, fontFamily });
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    onChange({ fontSize, color: event.target.value, backgroundColor, fontFamily });
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
    onChange({ fontSize, color, backgroundColor: event.target.value, fontFamily });
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
    onChange({ fontSize, color, backgroundColor, fontFamily: event.target.value });
  };

  return (
    <div className="subtitle-customization">
      <Typography variant="h4">Subtitles :</Typography>
      <div className="customization-item">
        <Typography>Font Size</Typography>
        <Slider value={fontSize} onChange={handleFontSizeChange} min={10} max={36} />
      </div>
      <div className="customization-item">
        <Typography>Font Color</Typography>
        <Select value={color} onChange={handleColorChange} fullWidth>
          <MenuItem value="#ffffff">White</MenuItem>
          <MenuItem value="#ff0000">Red</MenuItem>
          <MenuItem value="#00ff00">Green</MenuItem>
          <MenuItem value="#0000ff">Blue</MenuItem>
        </Select>
      </div>
      <div className="customization-item">
        <Typography>Background Color</Typography>
        <Select value={backgroundColor} onChange={handleBackgroundColorChange} fullWidth>
          <MenuItem value="#000000">Black</MenuItem>
          <MenuItem value="#ffffff">White</MenuItem>
          <MenuItem value="#ff0000">Red</MenuItem>
          <MenuItem value="#00ff00">Green</MenuItem>
        </Select>
      </div>
      <div className="customization-item">
        <Typography>Font Family</Typography>
        <Select value={fontFamily} onChange={handleFontFamilyChange} fullWidth>
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Verdana">Verdana</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
          <MenuItem value="Courier New">Courier New</MenuItem>
          <MenuItem value="Georgia">Georgia</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default SubtitleCustomization;
