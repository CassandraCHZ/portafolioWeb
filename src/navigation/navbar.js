import React, { useState } from 'react';
import './navbar.modules.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
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
                <li>
                    <a href="/">Sobre mí</a>
                </li>
                <li>
                    <a href="/">Proyectos</a>
                </li>
                <li>
                    <a href="/">Educación</a>
                </li>
                <li>
                    <a href="/">Skills</a>
                </li>
                <li>
                    <a href="/">Contáctame</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
