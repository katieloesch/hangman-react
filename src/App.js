import React from 'react';

import Hangman from './components/Hangman/Hangman';
import Contact from './components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Hangman />
      <Contact code='https://github.com/katieloesch/hangman-react' />
    </div>
  );
}

export default App;
