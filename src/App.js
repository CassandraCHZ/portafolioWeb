import React, { useRef } from 'react';
import Navbar from './navigation/navbar';
import AboutMe from './aboutMe/aboutMe';
import Projects from './projects/projects';
import Education from './education/education';
import Skills from './skills/skills';
import './App.css';
import './i18n';

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
<br/><br/><br/><br/>
      <div id="sobre-mi" ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div id="proyecto" ref={projectRef}>
        <Projects />
      </div>
      <div id="educacion" ref={educationRef}>
        <Education />
      </div>
      <div id="educacion" ref={skillsRef}>
        <Skills />
      </div>

    </div>
  );
};
