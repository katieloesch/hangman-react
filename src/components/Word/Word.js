import React from 'react'
import './Word.scss'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
    { selectedWord && selectedWord.split('').map( (letter, index) => (
        <span className="letter" key={index}>
              {correctLetters.includes(letter.toLowerCase()) ? letter.toUpperCase() : ''}
        </span>
    ))}
    </div>
  )
}

export default Word
