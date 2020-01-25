import React from 'react';

const Navigation = props => {
  const setCurrent = props.setCurrent;

  return (
    <nav>
      <ul>
        <li className='navCell w3-center w3-border w3-border-white'
          onClick={ () => setCurrent( 'home' ) } >
          Home</li>
        <li className='navCell w3-center w3-border w3-border-white'
          onClick={ () => setCurrent( 'intro' ) } >
          Intro</li>
        <li className='navCell w3-center w3-border w3-border-white'
          onClick={ () => setCurrent( 'projects' ) } >
          Projects</li>
        <li className='navCell w3-center w3-border w3-border-white'
          onClick={ () => setCurrent( 'about' ) } >
          About</li>
        <li className='navCell w3-center w3-border w3-border-white'
          onClick={ () => setCurrent( 'contact' ) } >
          Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation;
