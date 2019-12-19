import React from 'react';

import Navigation from '../Navigation';

const Home = () => {
  return (
    <div className='fullWidth w3-display-container'>
      <div className='home navUnder fullWidth borderTB borderGradient'>
        <h1 className='w3-center'>
          Steve M Morehead III</h1>
        <h3 className='w3-center'>
          Full Stack Web Dev Portfolio</h3>
      </div>
      <Navigation />
    </div>
  );
}

export default Home;