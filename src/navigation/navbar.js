import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFlagUsa, faFlag } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './navbar.modules.css';

const Navbar = ({ refs }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection] = useState(null);
    const email = "cassandra.hdez.zav@gmail.com";
    const linkLinkedIn = "https://www.linkedin.com/in/cassandra-hernández-zavala-0a48192a8";
    const linkGitHub = "https://github.com/CassandraCHZ";

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(); // Cerrar el menú después de hacer clic
    };

    //Change language
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav className="navbar">
            <img src="/images/Fotografia.jpeg" alt="Logo" className="logo" />
            <p className="name">Cassandra Hernández</p>
            <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                <li className={activeSection === 'sobreMi' ? 'active' : ''}>
                    <a href="#sobre-mi" onClick={() => scrollToSection(refs.aboutMeRef)} className="btnfos btnfos-2">{t('AboutMe')}</a>
                </li>
                <li>
                    <a href="/" className="btnfos btnfos-2">{t('Projects')}</a>
                </li>
                <li className={activeSection === 'educacion' ? 'active' : ''}>
                    <a href="#educacion" onClick={() => scrollToSection(refs.educationRef)} className="btnfos btnfos-2">{t('Education')}</a>
                </li>
                <li className={activeSection === 'skills' ? 'active' : ''}>
                    <a href="#skills" onClick={() => scrollToSection(refs.skillsRef)} className="btnfos btnfos-2">Skills</a>
                </li>

                <li >
                    <div className="iconV2" style={{marginLeft:"25px"}}>
                        <a href={linkGitHub} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" color="var(--primary-blue)" />
                        </a>
                        <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="var(--primary-blue)" />
                        </a>
                        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="var(--primary-blue)" />
                        </a>
                    </div>
                </li>

                <a onClick={toggleLanguage}>
                    <FontAwesomeIcon icon={i18n.language === 'en' ? faFlagUsa : faFlag} size="2x" color="var(--primary-blue)"/>
                </a>
            </ul>

        </nav>
    );
};

export default Navbar;
