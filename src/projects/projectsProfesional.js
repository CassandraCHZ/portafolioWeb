import './projectsProfesional.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectsProfesional() {
  //Change language
  const { t } = useTranslation();

  return (
    <>
      <div className="PP-title" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: "x-large", fontWeight: "bolder", textAlign: "center" }}>{t('PROFESSIONALPROJECTS')}</div>
      <br />
      <div>
        <div className="App-fila">
          <div className='App-columna'>
            <div className="PP-lineatemp">
              <div className="PP-subtitle" style={{ fontWeight: "600" }}>ISSEA - Instituto de Salud del Estado de Aguascalientes</div>
              
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADBACSQLDate')}</div>
                  <div>{t('ISEADBACSQL')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADBACSQLTech')} </div>
                </div>
              </div>
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADesarrolladorAMDate')}</div>
                  <div>{t('ISEADesarrolladorAM')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADesarrolladorAMTech')} </div>
                </div>
              </div>
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADBACIPSDate')}</div>
                  <div>{t('ISEADBACIPS')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADBACIPSTech')} </div>
                </div>
              </div>
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADesarrolladorDHDate')}</div>
                  <div>{t('ISEADesarrolladorDH')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADesarrolladorDHTech')} </div>
                </div>
              </div>
              
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADesarrolladorDate')}</div>
                  <div>{t('ISEADesarrollador')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADesarrolladorTech')} </div>
                </div>
              </div>
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('ISEADBADate')}</div>
                  <div>{t('ISEADBA')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('ISEADBATech')} </div>
                </div>
              </div>
            </div>
          </div>

          <div className='App-columna'>
            <div className="PP-lineatemp">
              <div className="PP-subtitle" style={{ fontWeight: "600" }}>Digitalhype</div>
              <div className="PP-fila">
                <div className="PP-disco"><div></div></div>
                <div className="PP-info-container">
                  <div style={{ fontWeight: '500' }}>{t('DigitalHypeDate')}</div>
                  <div>{t('DigitalHype')}</div>
                  <div className="PP-subtitle2" style={{ width: "100%" }}> {t('DigitalHypeTech')} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsProfesional;
