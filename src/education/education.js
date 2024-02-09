import './education.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
  //Change language
  const { t } = useTranslation();

  return (
    <div>
      <div className="title" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "x-large", fontWeight: "bolder", textAlign: "center", marginTop:"60px" }}>{t('EDUCATION')}</div>
      <div className="contenedo">
       
        <div className="lineatemp">
        <div className="subtitle">{t('Institution')}</div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2019-2024</div>
              <div>{t('Career2V')}</div>
              <div className="subtitle2"> Instituto Tecnológico de Aguascalientes </div>
            </div>
          </div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2016-2019</div>
              <div>{t('Baccalaureate')}</div>
              <div className="subtitle2">CEB 5/1 J. Reyes Heroles</div>
            </div>
          </div>
        </div>

        
        <div className="lineatemp">
        <div className="subtitle">{t('Courses')}</div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2023</div>
              <div>Bussines Intelligence</div>
              <div className="subtitle2">Ceriprof</div>
              <div>Digital Marketing</div>
              <div className="subtitle2">Ceriprof</div>
            </div>
          </div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2022</div>
              <div>CCNA - Enterprise Networking, Security, and Automation</div>
              <div className="subtitle2">CISCO</div>
            </div>
          </div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2021</div>
              <div>CCNA - Introduction to Networks</div>
              <div className="subtitle2">CISCO</div>
              <div>Talent Land Digital</div>
              <div className="subtitle2">Talent Land</div>
            </div>
          </div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>2016</div>
              <div>{t('Google')}</div>
              <div className="subtitle2">Google</div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Education;
