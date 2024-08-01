import React from 'react';
import './Table.css';
import RowTable from './RowTable';

export function Table  ({ players })  {
  return (
    <div className="table-container">
      <div className="columns is-vcentered table-header">
        <div className="column"><span>Nombre</span></div>
        <div className="column"><span>Edad</span></div>
        <div className="column"><span>Valoración</span></div>
        <div className="column"><span>Equipo & Contrato</span></div>
      </div>
      {players.map((player, index) => (
        <RowTable key={index} player={player} />
      ))}
    </div>
  );
};

export default Table;
