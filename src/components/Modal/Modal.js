import React, { useEffect } from 'react'
import { checkStatus } from '../helper_functions/helper_functions';
import './Modal.scss'

const Modal = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  let message = '';
  let wordReveal = '';

  let playable = true; 
  let status = checkStatus(correctLetters, wrongLetters, selectedWord);

  if (checkStatus(correctLetters, wrongLetters, selectedWord) === 'win') {
    message = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkStatus(correctLetters, wrongLetters, selectedWord) === 'loss') {
    message = 'Unfortunately you lost. 😕';
    wordReveal = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable)
  })


  return (
    <div className="modal-container" style={message !== '' ? {display: 'flex'} : {}}>
        <div className="modal">
            <h2 id="message">{message}</h2>
            <h3 id="word-reveal">{wordReveal}</h3>
            <button className="btn" id="btn-play-again">Play Again</button>
        </div>
    </div>
  )
}

export default Modal
