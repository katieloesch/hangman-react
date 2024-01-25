import React from 'react'
import './WrongLetters.scss'

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
        <div className='wrong-letters'>

          {
            wrongLetters.length > 0 && <p>Incorrect guesses: {wrongLetters.length} / 6</p>
          }
          {
            wrongLetters.length === 0 && <p>&nbsp;</p>
          }
          {
            wrongLetters
            .map((letter, index) => (<span key={index}>{letter.toUpperCase()}</span>))
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
          }
          {
            wrongLetters.length === 0 && <p>&nbsp;</p>
          }

        </div>
    </div>
  )
}

export default WrongLetters
