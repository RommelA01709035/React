import React from 'react';
import './Table.css';
import PhotoProfile from './PhotoProfile';

const Table = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <span>Nombre</span>
        <span>Edad</span>
        <span>Valoración</span>
        <span>Posición</span>
        <span>Equipo & Contrato</span>
      </div>
      <div className="table-row">
        <PhotoProfile userName="midudev" />
        <span className="table-cell">C. Summerville</span>
        <span className="table-cell flag">
          <img src="ruta_a_bandera.jpg" alt="Bandera" />
        </span>
        <span className="table-cell">MI MD</span>
        <span className="table-cell">21</span>
        <span className="table-cell rating current">76</span>
        <span className="table-cell rating potential">84</span>
        <div className="table-team">
          <img src="ruta_a_logo_equipo.jpg" alt="Leeds United" />
          <span className="team-name">Leeds United</span>
          <span>2020 ~ 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Table;