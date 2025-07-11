import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGears } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './skills.modules.css';
import React from 'react';
import { useTranslation } from 'react-i18next';



function Skills() {
    //Change language
    const { t } = useTranslation();

    return (
        <>
            <div className="S-title">SKILLS</div>
            <br />
            <br />
            <div className='App-fila' style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className='App-columna' style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="S-card">
                        <div className="S-card-inner">
                            <div className="S-card-front">
                                <div className="S-content">
                                    <div className="S-icono">
                                        <FontAwesomeIcon icon={faCode} size="5x" />
                                    </div>

                                    <div className="S-subtitle">
                                        <span>Front End</span>
                                    </div>
                                </div>
                            </div>
                            <div className="S-card-back">
                                <div className="S-img-container">
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/bootstrap.png`} alt='Bootstrap' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/chakra.png`} alt='Chakra UI' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/rn.png`} alt='React Native' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/html.png`} alt='HTML' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/css.png`} alt='CSS' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/js.png`} alt='JS' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/frontEnd/powerbi.png`} alt='PowerBI' className="S-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='App-columna' style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="S-card">
                        <div className="S-card-inner">
                            <div className="S-card-front">
                                <div className="S-content">
                                    <div className="S-icono">
                                        <FontAwesomeIcon icon={faDatabase} size="5x" />
                                    </div>
                                    <div className="S-subtitle">
                                        <span>Back End</span>
                                    </div>
                                </div>
                            </div>
                            <div className="S-card-back">
                                <div className="S-img-container">
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/laravel.png`} alt='Laravel' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/postman.png`} alt='Postman' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/node.png`} alt='Node JS' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/mysql.png`} alt='MySQL' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/java.png`} alt='JAVA' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/php.png`} alt='PHP' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/sql.png`} alt='SQL' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/c.png`} alt='C#' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/python.png`} alt='Python' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/aspnet.png`} alt='AspNet' className="S-img-back" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/backEnd/netFramework.png`} alt='NetFramework' className="S-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='App-columna' style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="S-card">
                        <div className="S-card-inner">
                            <div className="S-card-front">
                                <div className="S-content">
                                    <div className="S-icono">
                                        <FontAwesomeIcon icon={faGears} size="5x" />
                                    </div>
                                    <div className="S-subtitle">
                                        <span>{t('Others')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="S-card-back">
                                <div className="S-img-container">
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/adobe.png`} alt='Abode Illustration' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/android.png`} alt='Android Studio' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/arduino.png`} alt='Arduino' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/excel.png`} alt='Excel' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/github.png`} alt='GitHub' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/visual.png`} alt='Visual Studio' className="S-img" />
                                    <img src={`${process.env.PUBLIC_URL}/logos/Others/aspnet.png`} alt='ASP NET' className="S-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <br />
            <div className='App-fila' style={{ alignContent: 'center', justifyContent: 'center' }}>
                <div className="S-rec">

                    <div className="S-rec S-t">{t('Footer')} </div>

                    <div className="S-boton">

                        <button className="S-boton react"><FontAwesomeIcon icon={faReact} size="x" /> React</button>
                        <button className="S-boton html"><FontAwesomeIcon icon={faHtml5} size="x" /> HTML</button>
                        <button className="S-boton css"><FontAwesomeIcon icon={faCss3Alt} size="x" /> CSS</button>
                        <button className="S-boton node"><FontAwesomeIcon icon={faNodeJs} size="x" /> Node JS</button>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
