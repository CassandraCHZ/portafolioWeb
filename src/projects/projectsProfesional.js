import './projectsProfesional.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectsProfesional() {
  //Change language
  const { t } = useTranslation();

  return (
    <div>
      <div className="title" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "x-large", fontWeight: "bolder", textAlign: "center", marginTop:"60px" }}>{t('PROFESSIONALPROJECTS')}</div>
      <div className="contenedo">
       
        <div className="lineatemp">
        <div className="subtitle" style={{ fontWeight: "600"}}>ISSEA - Instituto de Salud del Estado de Aguascalientes</div>
           <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>{t('ISEADesarrolladorDate')}</div>
              <div>{t('ISEADesarrollador')}</div>
              <div className="subtitle2" style={{width: "100%"}}> {t('ISEADesarrolladorTech')} </div>
            </div>
          </div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>{t('ISEADBADate')}</div>
              <div>{t('ISEADBA')}</div>
              <div className="subtitle2" style={{width: "100%"}}> {t('ISEADBATech')} </div>
            </div>
          </div>
        </div>

        <div className="lineatemp">
        <div className="subtitle" style={{ fontWeight: "600"}}>Digitalhype</div>
          <div className="fila">
            <div className="disco"><div></div></div>
            <div className="info-container">
              <div>{t('DigitalHypeDate')}</div>
              <div>{t('DigitalHype')}</div>
              <div className="subtitle2" style={{width: "100%"}}> {t('DigitalHypeTech')} </div>
            </div>
          </div>
        </div>

      </div>
      </div>
  );
}

export default ProjectsProfesional;
