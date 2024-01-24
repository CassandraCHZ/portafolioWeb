import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './aboutMe.modules.css';
import React from 'react';

function AboutMe() {
  const cvUrl = "https://drive.google.com/file/d/1gxadfQkzsf6ZjUDXy17O2MpB1xkBWv3H/view?usp=sharing";

  return (
    <div className="container">
      <div className="leftColumn">
        <div className="header">
          <span>Hola, soy</span>
          <div className="typing-container">
          <p className="typing-text">Cassandra Celheoltl Hernández Zavala</p>
          </div>
          <p>
            Ingeniera en Tecnologías de la Información y Comunicaciones.
          </p>
          <p className='text'>
            Apasionada por el desarrollo web y amante del café. Me caracterizan el compromiso, la disciplina y la responsabilidad. Siempre busco ofrecer resultados excepcionales. ¡Espero que disfrutes revisando mi perfil!
          </p>
          <div id="outer">
            <a className="button_slide slide_right" href={cvUrl} download="CV_CassandraCelheoltlHernándezZavala.pdf" >Descargar CV</a>
          </div>
        </div>
      </div>
      <div className="rightColumn">
        <img className="image" src="/images/FotoCirculos.png" alt="Cassandra Hernández"></img>
        <div className="icon">
          <a href="https://github.com/tu-usuario-de-github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://github.com/tu-usuario-de-github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://github.com/tu-usuario-de-github" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
