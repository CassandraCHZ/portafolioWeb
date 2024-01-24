import './education.modules.css';
import React from 'react';

function Education() {
  return (
    <div className="container">
      <div className="leftColumn">
        <div className="header">
          <span>Instituciones Académicas</span>

          <p>
            Instituto Tecnológico de Aguascalientes
          </p>
          <p className='text'>
            Ingeniera en Tecnologías de la Información y Comunicaciones.
          </p>

        </div>
      </div>
      <div className="rightColumn">
        <img className="image" src="/images/FotoCirculos.png" alt="Cassandra Hernández"></img>
      </div>
    </div>
  );
}

export default Education;
