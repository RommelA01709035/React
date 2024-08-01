import React from 'react';
import './Table.css';
import PhotoProfile from './PhotoProfile';

const RowTable = ({ player }) => {
  return (
    <tr className="table-row">
      <th>{player.number}</th>
      <td><PhotoProfile userName={player.userName} /></td>
      <td>{player.name}</td>
      <td>
        <img src={player.nationalityFlag} alt="Bandera" onError={(e) => e.target.src = 'ruta/a/imagen/por/defecto.png'} />
      </td>
      <td>{player.position}</td>
      <td>{player.age}</td>
      <td>{player.currentRating}</td>
      <td>{player.potentialRating}</td>
      <td>
        <div className="table-team">
          <img src={player.teamLogo} alt={player.teamName} onError={(e) => e.target.src = 'ruta/a/imagen/por/defecto.png'} />
          <span className="team-name">{player.teamName}</span>
        </div>
      </td>
      <td>{player.contract}</td>
    </tr>
  );
};

export default RowTable;
