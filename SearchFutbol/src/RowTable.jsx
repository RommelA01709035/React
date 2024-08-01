import React from 'react';
import './Table.css';
import PhotoProfile from './PhotoProfile';

const RowTable = () => {
  return (
    <div className="table-container">
      
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

export default RowTable;