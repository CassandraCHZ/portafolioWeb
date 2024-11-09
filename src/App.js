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
      <section className='App-columna'>
        <div className='App-columna' id="sobre-mi" ref={aboutMeRef} style={{ height: '80vh', background: 'gray' }}>
          <AboutMe />
        </div>
        <div className='App-columna'>
          <h1>proyectos prof</h1>
        </div>
        <div className='App-columna'>
          <h1>proyectos personales</h1>
        </div>
        <div className='App-columna'>
          <h1>educacion</h1>
        </div>

      </section>

    </>
  );
};
