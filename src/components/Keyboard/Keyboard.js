import React from 'react'
import './Keyboard.scss'

const Keyboard = ({ handleKeyClick, showKeys, setShowKeys}) => {

    // creating an array with all alphabet letters for the virtual keyboard
    const abcCodes = Array.from(Array(26)).map((e, i) => i + 65);
    const abc = abcCodes.map((x) => String.fromCharCode(x));
    const keys = (abc.map((letter, index) => {
        return (
            <button className='btn btn-letter' key={`key-${index}`} onClick={() => handleKeyClick(letter)}>
                {letter.toUpperCase()}
            </button>
        )
    }))



  return (
    <div className='keyboard-container'>
        {!showKeys && <button className='btn' id='btn-show-keys' onClick={() => setShowKeys(true)}>Keyboard</button>}
        {showKeys && keys}
      
    </div>
  )
}

export default Keyboard
