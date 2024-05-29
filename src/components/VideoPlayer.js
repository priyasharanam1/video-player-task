import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@mui/material';

const VideoPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="video-player">
      <ReactPlayer
        url={url}
        playing={playing}
        muted={muted}
        controls={true}
        width="100%"
        height="auto"
      />
      <div className="controls">
        <Button variant="contained" color="primary" onClick={handlePlayPause}>
          {playing ? 'Pause' : 'Play'}
        </Button>
        <Button variant="contained" color="secondary" onClick={handleMute}>
          {muted ? 'Unmute' : 'Mute'}
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;