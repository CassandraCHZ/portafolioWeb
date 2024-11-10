import './education.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
  //Change language
  const { t } = useTranslation();

  return (
    <>
      <div className="P-title" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "x-large", fontWeight: "bolder", textAlign: "center", marginTop: "60px" }}>{t('EDUCATION')}</div>
      <br/>
      <br/>
      <div className="App-fila">
        <div className='App-columna'>
          <div className="P-lineatemp">
            <div className="P-subtitle" style={{ fontWeight: "600" }}>{t('Institution')}</div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2019-2024</div>
                <div>{t('Career2V')}</div>
                <div className="P-subtitle2"> Instituto Tecnológico de Aguascalientes </div>
              </div>
            </div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2016-2019</div>
                <div>{t('Baccalaureate')}</div>
                <div className="P-subtitle2">CEB 5/1 J. Reyes Heroles</div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='App-columna'>
          <div className="P-lineatemp">
            <div className="P-subtitle">{t('Courses')}</div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2023</div>
                <div>Bussines Intelligence</div>
                <div className="P-subtitle2">Ceriprof</div>
                <div>Digital Marketing</div>
                <div className="P-subtitle2">Ceriprof</div>
              </div>
            </div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2022</div>
                <div>CCNA - Enterprise Networking, Security, and Automation</div>
                <div className="P-subtitle2">CISCO</div>
              </div>
            </div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2021</div>
                <div>CCNA - Introduction to Networks</div>
                <div className="P-subtitle2">CISCO</div>
                <div>Talent Land Digital</div>
                <div className="P-subtitle2">Talent Land</div>
              </div>
            </div>
            <div className="P-fila">
              <div className="P-disco"><div></div></div>
              <div className="P-info-container">
                <div style={{fontWeight:'500'}}>2016</div>
                <div>{t('Google')}</div>
                <div className="P-subtitle2">Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
