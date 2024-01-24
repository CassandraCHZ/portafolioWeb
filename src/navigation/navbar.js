import React, { useState } from 'react';
import './navbar.modules.css';

const Navbar = ({ refs }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection] = useState(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(); // Cerrar el menú después de hacer clic
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
                    <a href="#sobre-mi" onClick={() => scrollToSection(refs.sobreMiRef)} className="btnfos btnfos-2">Sobre mí</a>
                </li>
                <li>
                    <a href="/" className="btnfos btnfos-2">Proyectos</a>
                </li>
                <li className={activeSection === 'educacion' ? 'active' : ''}>
                    <a href="#educacion" className="btnfos btnfos-2">Educación</a>
                </li>
                <li>
                    <a href="/" className="btnfos btnfos-2">Skills</a>
                </li>
                <li>
                    <a href="/" className="btnfos btnfos-2">Contáctame</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
