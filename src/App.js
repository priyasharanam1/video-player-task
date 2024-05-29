import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import SubtitleCustomization from './components/SubtitleCustomization';
import './App.css';

const App = () => {
  const [subtitleStyle, setSubtitleStyle] = useState({
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#000000',
    fontFamily: 'Arial',
  });

  const handleSubtitleChange = (style) => {
    setSubtitleStyle(style);
  };

  return (
    <div className="App">
      <VideoPlayer url="Vid.mp4" />
      <div
        className="subtitle"
        style={{
          fontSize: `${subtitleStyle.fontSize}px`,
          color: subtitleStyle.color,
          backgroundColor: subtitleStyle.backgroundColor,
          fontFamily: subtitleStyle.fontFamily
        }}
      >
        Sample Subtitle Text
      </div>
      <SubtitleCustomization onChange={handleSubtitleChange} />
    </div>
  );
};

export default App;