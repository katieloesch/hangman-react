import React, { useEffect } from 'react';
import { checkStatus } from '../../util/helper_functions';
import gifSad from './../../assets/gifs/sad.gif';
import gifHappy from './../../assets/gifs/happy.gif';
import './Modal.scss';

const Modal = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  play,
}) => {
  let message = '';
  let wordReveal = '';
  let gif;
  let gifAlt = '';

  let playable = true;

  if (checkStatus(correctLetters, wrongLetters, selectedWord) === 'win') {
    message = 'Congrats!';
    gif = gifHappy;
    gifAlt = 'happy face';
    wordReveal = `You found the word: `;
    playable = false;
  } else if (
    checkStatus(correctLetters, wrongLetters, selectedWord) === 'loss'
  ) {
    message = 'Game Over!';
    gif = gifSad;
    gifAlt = 'sad face';
    wordReveal = 'The correct word was: ';
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className='modal-container'
      style={message !== '' ? { display: 'flex' } : {}}
    >
      <div className='modal'>
        <h2 id='message'>{message}</h2>
        <img src={gif} alt={gifAlt} />
        <p id='word-reveal'>
          {wordReveal}
          <span>{selectedWord}</span>
        </p>
        <button className='btn' id='btn-play-again' onClick={play}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
