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
        <div className="contenedor">
            <div className="title">
                <span>SKILLS</span>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="content">
                                <div className="icono">
                                    <FontAwesomeIcon icon={faCode} size="5x" />
                                </div>

                                <div className="subtitle">
                                    <span>Front End</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="img-container">
                                <img src='logos/frontEnd/bootstrap.png' alt='Bootstrap' className="img" />
                                <img src='logos/frontEnd/chakra.png' alt='Chakra UI' className="img" />
                                <img src='logos/frontEnd/rn.png' alt='React Native' className="img" />
                                <img src='logos/frontEnd/html.png' alt='HTML' className="img" />
                                <img src='logos/frontEnd/css.png' alt='CSS' className="img" />
                                <img src='logos/frontEnd/js.png' alt='JS' className="img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="content">
                                <div className="icono">
                                    <FontAwesomeIcon icon={faDatabase} size="5x" />
                                </div>
                                <div className="subtitle">
                                    <span>Back End</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="img-container">
                                <img src='logos/backEnd/laravel.png' alt='Laravel' className="img-back" />
                                <img src='logos/backEnd/postman.png' alt='Postman' className="img-back" />
                                <img src='logos/backEnd/node.png' alt='Node JS' className="img-back" />
                                <img src='logos/backEnd/mysql.png' alt='MySQL' className="img-back" />
                                <img src='logos/backEnd/java.png' alt='JAVA' className="img-back" />
                                <img src='logos/backEnd/php.png' alt='PHP' className="img-back" />
                                <img src='logos/backEnd/sql.png' alt='SQL' className="img-back" />
                                <img src='logos/backEnd/c.png' alt='C#' className="img-back" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="content">
                                <div className="icono">
                                    <FontAwesomeIcon icon={faGears} size="5x" />
                                </div>
                                <div className="subtitle">
                                    <span>{t('Others')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="img-container">
                                <img src='logos/Others/adobe.png' alt='Abode Illustration' className="img" />
                                <img src='logos/Others/android.png' alt='Android Studio' className="img" />
                                <img src='logos/Others/arduino.png' alt='Arduino' className="img" />
                                <img src='logos/Others/excel.png' alt='Excel' className="img" />
                                <img src='logos/Others/github.png' alt='GitHub' className="img" />
                                <img src='logos/Others/visual.png' alt='Visual Studio' className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rec">
                <div className="rec t">{t('Footer')}
                    <div className="boton">
                        <button className="boton react"><FontAwesomeIcon icon={faReact} size="x" /> React</button>
                        <button className="boton html"><FontAwesomeIcon icon={faHtml5} size="x" /> HTML</button>
                        <button className="boton css"><FontAwesomeIcon icon={faCss3Alt} size="x" /> CSS</button>
                        <button className="boton node"><FontAwesomeIcon icon={faNodeJs} size="x" /> Node JS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
