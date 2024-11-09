import React, { useRef } from 'react';
import Navbar from './navigation/navbar';
import AboutMe from './aboutMe/aboutMe';
import ProjectsProfesional from './projects/projectsProfesional';
import Projects from './projects/projects';
import Education from './education/education';
import Skills from './skills/skills';
import './i18n';

export default function App() {
  const aboutMeRef = useRef(null);
  const projectPRef = useRef(null)
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contacmeRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{ aboutMeRef, projectPRef, projectRef, educationRef, skillsRef, contacmeRef }} />
        <br/>
        <br/>
        <br/>
        <br/>
      <section className='App-columna' >
        <div className='App-columna' id="sobre-mi" ref={aboutMeRef} >
          <AboutMe />
        </div>
        <div className='App-columna' style={{ background: 'yellow' }}>
          <span>proyectos prof</span>
        </div>
        <div className='App-columna'>
          <span>proyectos personales</span>
        </div>
        <div className='App-columna'>
          <span>educacion</span>
        </div>
      </section>
    </>
  );
};
