import React from 'react';

import beach   from '../assets/img/mason-b-8PrlygqHOuQ-unsplash.jpg';
import overlay from '../assets/img/overlay.png';

const Background = () => {
  return (
    <div className='backgrounds'>
      <div className='backgrounds bg1'>
        <img className='object-fit-cover' src={ beach } alt='beach' /></div>
        
      <div className='backgrounds bg2'>
        <img className='object-fit-cover' src={ overlay } alt='overlay' /></div>

      <span className='backgrounds bg3'></span>
    </div>
  );
}

export default Background;
