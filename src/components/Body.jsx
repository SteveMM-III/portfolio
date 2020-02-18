import React, { useState } from 'react';

import Home       from './sections/Home';
import Intro      from './sections/Intro';
import Projects   from './sections/Projects';
import About      from './sections/About';
import Contact    from './sections/Contact';
import Navigation from './Navigation';

const Body = () => {
  // conditional rendering will go here
  const [ current, setCurrent ] = useState( 'home' );

  return (
    <main>
      <div className='fullWidth w3-display-container'>
        { current === 'home'     && <Home     /> }
        { current === 'intro'    && <Intro    /> }
        { current === 'projects' && <Projects /> }
        { current === 'about'    && <About    /> }
        { current === 'contact'  && <Contact  /> }
        <Navigation setCurrent={ setCurrent } />
      </div>
    </main>
  );
};

export default Body;
