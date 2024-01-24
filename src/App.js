import React, {useRef} from 'react';
import Navbar from './navigation/navbar';
import AboutMe from './aboutMe/aboutMe';
import Education from './education/education';
import './App.css';

export default function App() {
  const sobreMiRef = useRef(null);
  const educacionRef = useRef(null);

  return (
    <div>
      <Navbar 
      refs={{ sobreMiRef, educacionRef }}/>
      <div id="sobre-mi" ref={sobreMiRef}>
        <AboutMe />
      </div>
      <div id="educacion" ref={educacionRef}>
      <Education />
      </div>
    </div>
  );
};
