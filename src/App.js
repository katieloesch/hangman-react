import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Figure from './components/Figure/Figure';
import WrongLetters from './components/WongLetters/WrongLetters';
import Word from './components/Word/Word';
import Hint from './components/Hint/Hint';
import Keyboard from './components/Keyboard/Keyboard';
import Modal from './components/Modal/Modal';
import Notification from './components/Notification/Notification';
import ContactIcons from './components/ContactIcons/ContactIcons';

import { show } from './components/helper_functions/helper_functions';
import { words } from './api/words';

import './App.scss';
let selectedWord = words[Math.floor(Math.random() * words.length)].word;

function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHint, setShowHint] = useState(false)
  const [showKeys, setShowKeys] = useState(false)

  console.log('selected word: ', selectedWord)



  useEffect(() => {

    const handleKeydown = e => {
      const { key, keyCode } = e;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(correctLetters => [...correctLetters, letter])
          } else {
           show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            show(setShowNotification)
          }
        }
      }
    }


    
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);

  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setShowHint(false)
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random].word;
  }

  const changeKeyStyle = function(key, style) {

  }

  const handleKeyClick = function(key) {

    if (playable) {
      const letter = key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(correctLetters => [...correctLetters, letter]);
          
        } else {
         show(setShowNotification)
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(wrongLetters => [...wrongLetters, letter]);
        } else {
          show(setShowNotification)
        }
      }
    }

  }

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Hint setShowHint={setShowHint} showHint={showHint} selectedWord={selectedWord}/>
        <Keyboard handleKeyClick={handleKeyClick} setShowKeys={setShowKeys} showKeys={showKeys} wrongLetters={wrongLetters} correctLetters={correctLetters}/>
        <ContactIcons />
      </div>
      

      <Modal correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification} />
    
      
    </>
  );
}

export default App;
