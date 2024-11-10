import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import './aboutMe.modules.css';
import React from 'react';

function AboutMe() {
  const cvUrl = "https://drive.google.com/file/d/1I6IQW1QeE-LwRanwCS8lsXL2yG1BO26g/view?usp=sharing";
  const email = "cassandra.hdez.zav@gmail.com";
  const linkLinkedIn = "https://www.linkedin.com/in/cassandra-celheoltl-hernández-zavala-0a48192a8";
  const linkGitHub = "https://github.com/CassandraCHZ";

  //Change language
  const { t } = useTranslation();

  return (
    <div className="App-fila" style={{ height: '100%', width: '100%' }}>
      <div className='App-columna' style={{ alignItems: 'center', justifyContent: 'center'}} >
        <div className='App-columna' style={{ alignItems: "center", justifyContent: 'center',  width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>{t('Greetings')}</span>
          <div className="AM-typing-container">
            <p className="AM-typing-text">Cassandra Celheoltl Hernández Zavala</p>
          </div>
          <span style={{textAlign:"center", fontWeight:"bolder"}}>{t('Career')}</span>
          <br/>
          <span className='text' style={{textAlign:"center"}}>{t('About')}</span>
          <div id="outer">
            <a className="AM-button_slide AM-slide_right" href={cvUrl} download="CV_CassandraCelheoltlHernándezZavala.pdf">{t('Donwload')}</a>
          </div>
        </div>
      </div>
      <div className='App-columna' style={{ padding: '5px' }}>
        <div className='App-fila' style={{ height: '85%', padding: '5%', alignItems: 'center', justifyContent:'center'}}>
          <img className="AM-imagen" src={`${process.env.PUBLIC_URL}/images/FotoCirculos.png`} alt="Cassandra Hernández"></img>
        </div>
        <div className='AM-contenedorIconos' style={{ height: '15%' }} >
          <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='AM-icono' icon={faGithub} />
          </a>
          <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='AM-icono' icon={faLinkedin} />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='AM-icono' icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
