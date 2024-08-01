import React from 'react';
import PhotoProfile from './PhotoProfile';

const RowTable = ({ player }) => {
  return (
    <div className="table-row">
      <PhotoProfile userName={player.userName} />
      <span className="table-cell">{player.name}</span>
      <span className="table-cell flag">
        <img src={player.nationalityFlag} alt="Bandera" />
      </span>
      <span className="table-cell">{player.position}</span>
      <span className="table-cell">{player.age}</span>
      <span className="table-cell rating current">{player.currentRating}</span>
      <span className="table-cell rating potential">{player.potentialRating}</span>
      <div className="table-team">
        <img src={player.teamLogo} alt={player.teamName} />
        <span className="team-name">{player.teamName}</span>
        <span>{player.contract}</span>
      </div>
    </div>
  );
};

export default RowTable;
