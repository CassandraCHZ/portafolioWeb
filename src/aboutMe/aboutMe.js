import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './aboutMe.modules.css';
import React from 'react';

function AboutMe() {
  const cvUrl = "https://drive.google.com/file/d/1gxadfQkzsf6ZjUDXy17O2MpB1xkBWv3H/view?usp=sharing";
  const email = "cassandra.hdez.zav@gmail.com";
  const linkLinkedIn= "https://www.linkedin.com/in/cassandra-hernández-zavala-0a48192a8";
  const linkGitHub= "https://github.com/CassandraCHZ";

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
          <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" color= "var(--primary-blue)"/>
          </a>
          <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color= "var(--primary-blue)"/>
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="3x" color= "var(--primary-blue)"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
