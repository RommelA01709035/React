import React from 'react';
import './photo-porfile.css'

function PhotoProfile({ userName }) {
  return (
    <img className="player-photo"src={`https://unavatar.io/${userName}`} alt="Avatar" />
  );
}

export default PhotoProfile;