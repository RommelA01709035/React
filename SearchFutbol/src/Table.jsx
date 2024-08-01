import React from 'react';
import './Table.css';
import PhotoProfile from'./PhotoProfile.jsx'

export function Table({ players }) {
  return (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Bandera</th>
          <th>Posición</th>
          <th>Edad</th>
          <th>Valoración Actual</th>
          <th>Valoración Potencial</th>
          <th>Equipo</th>
          <th>Contrato</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.number}</td>
            <td>
            <PhotoProfile userName="midudev" />
            </td>
            <td>{player.name}</td>
            <td>
              <img 
                src={player.nationalityFlag} 
                alt="Bandera" 
                onError={(e) => e.target.src = 'ruta/a/imagen/por/defecto.png'}
                className="flag-img"
              />
            </td>
            <td>{player.position}</td>
            <td>{player.age}</td>
            <td>{player.currentRating}</td>
            <td>{player.potentialRating}</td>
            <td>
              <div className="table-team">
                <img 
                  src={player.teamLogo} 
                  alt={player.teamName} 
                  onError={(e) => e.target.src = 'ruta/a/imagen/por/defecto.png'}
                  className="team-logo"
                />
                <span className="team-name">{player.teamName}</span>
              </div>
            </td>
            <td>{player.contract}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
