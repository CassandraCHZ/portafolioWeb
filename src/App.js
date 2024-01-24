import React, { useRef } from 'react';
import Navbar from './navigation/navbar';
import AboutMe from './aboutMe/aboutMe';
import Projects from './projects/projects';
import Education from './education/education';
import Skills from './skills/skills';
import Contactme from './contactMeFooter/contactme';
import './App.css';

export default function App() {
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contacmeRef = useRef(null);

  return (
    <div>
      <Navbar
        refs={{ aboutMeRef, projectRef, educationRef, skillsRef, contacmeRef }} />
      <div id="sobre-mi" ref={aboutMeRef}>
        <AboutMe />
      </div>

      <div id="educacion" ref={educationRef}>
        <Education />
      </div>

    </div>
  );
};
