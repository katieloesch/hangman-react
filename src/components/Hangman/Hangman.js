import React, { useEffect, useState } from 'react';

import {
  Categories,
  Figure,
  Header,
  Hint,
  Keyboard,
  Modal,
  Notification,
  Word,
  WrongLetters,
} from '../../components';

import { show } from '../../util/helper_functions';
import { animals, cities, films, words } from '../../assets/word_lists';

import './Hangman.scss';

let selectedWord = words[Math.floor(Math.random() * words.length)].word;
const categories = ['random', 'animals', 'cities', 'films'];

function Hangman() {
  const [playable, setPlayable] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const [category, setCategory] = useState('random');
  const [list, setList] = useState(words);

  useEffect(() => {
    const handleKeydown = (e) => {
      const { key, keyCode } = e;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.toLowerCase().includes(letter.toLowerCase())) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((correctLetters) => [...correctLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function changeWordList(category) {
    if (category === 'random') {
      setList(words);
    } else if (category === 'animals') {
      setList(animals);
    } else if (category === 'cities') {
      setList(cities);
    } else if (category === 'films') {
      setList(films);
    }
  }

  function play() {
    setPlayable(true);
    setShowHint(false);
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
          setCorrectLetters((correctLetters) => [
            ...correctLetters,
            letter.toLowerCase(),
          ]);
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
    }
  }

  return (
    <div className='hangman-app'>
      <Header playable={playable} />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Hint
          setShowHint={setShowHint}
          showHint={showHint}
          selectedWord={selectedWord}
          list={list}
        />
        <Categories
          category={category}
          setCategory={setCategory}
          categories={categories}
          changeWordList={changeWordList}
          play={play}
        />
        <Keyboard
          handleKeyClick={handleKeyClick}
          setShowKeys={setShowKeys}
          showKeys={showKeys}
          wrongLetters={wrongLetters}
          correctLetters={correctLetters}
        />
      </div>

      <Modal
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        play={play}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default Hangman;
