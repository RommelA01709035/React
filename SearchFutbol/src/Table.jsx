import React from 'react';
import './Table.css';
import RowTable from './RowTable';

const Table = ({ players }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <span>Nombre</span>
        <span>Edad</span>
        <span>Valoración</span>
        <span>Posición</span>
        <span>Equipo & Contrato</span>
      </div>
      {players.map((player, index) => (
        <RowTable key={index} player={player} />
      ))}
    </div>
  );
};

export default Table;