import React from 'react';

import Background from './components/Background';
import Body from './components/Body';
import Footer from './components/Footer';


import './reset.css';
import 'w3-css/w3.css';

function App() {
  return (
    <div className="App" id='page-content'>
      <Background />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
