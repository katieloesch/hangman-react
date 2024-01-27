import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
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
import { animals } from './api/animals';
import { cities } from './api/cities';
import { films } from './api/films';

import './App.scss';

let selectedWord = words[Math.floor(Math.random() * words.length)].word;
const categories = ['random', 'animals', 'cities', 'films']

function App() {

  const [playable, setPlayable] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const [category, setCategory] = useState('random');
  const [list, setList] = useState(words)

  useEffect(() => {
    console.log('effffffffffffffffffff')
    console.log(playable)
    const handleKeydown = e => {
      const { key, keyCode } = e;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.toLowerCase().includes(letter.toLowerCase())) {
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

  function changeWordList(category) {
    console.log('change word list')

    if (category === "random") {
      setList(words)
    } else if (category === "animals") {
      setList(animals)
    } else if (category === "cities") {
      setList(cities)
    } else if (category === "films") {
      setList(films)
    }
    console.log(list)

  }

  function play() {
    setPlayable(true);
    setShowHint(false)
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * list.length);
    selectedWord = list[random].word;
  }



  function handleKeyClick(key) {

    if (playable) {
      const letter = key.toLowerCase();

      if (selectedWord.toLowerCase().includes(letter.toLowerCase())) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(correctLetters => [...correctLetters, letter.toLowerCase()]);
          
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
    <div className='app'>
      <Header playable={playable} />
      <div className='game-container'>
        <Categories category={category} setCategory={setCategory} categories={categories} changeWordList={changeWordList} play={play}/>
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Hint setShowHint={setShowHint} showHint={showHint} selectedWord={selectedWord} list={list}/>
        <Keyboard handleKeyClick={handleKeyClick} setShowKeys={setShowKeys} showKeys={showKeys} wrongLetters={wrongLetters} correctLetters={correctLetters}/>
      </div>
      
      <ContactIcons />
      <Modal correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} play={play}/>
      <Notification showNotification={showNotification} />    
      
    </div>
  );
}

export default App;
