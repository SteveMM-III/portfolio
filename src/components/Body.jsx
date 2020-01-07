import React, { useState } from 'react';

import Home from './modals/Home';
import Intro from './modals/Intro';
import Projects from './modals/Projects';
import About from './modals/About';
import Contact from './modals/Contact';
import Navigation from './Navigation';

const Body = () => {
  // conditional rendering will go here
  const [ current, setCurrent ] = useState( 'home' );

  return (
    <main>
      <div className='fullWidth w3-display-container'>
        { current === 'home' && <Home /> }
        { current === 'intro' && <Intro /> }
        { current === 'projects' && <Projects /> }
        { current === 'about' && <About /> }
        { current === 'contact' && <Contact /> }
        <Navigation setCurrent={ setCurrent } />
      </div>
    </main>
  );
};

export default Body;
