import React from 'react'
import { words } from '../../api/words'
import './Hint.scss'

const Hint = ({ showHint, setShowHint, selectedWord }) => {
    let wordDescription = words.find((e) => (e.word === selectedWord)).hint

  return (
    <div className='hint'>
        { !showHint && <button className='btn' id='btn-hint' onClick={() => setShowHint(true)}>Hint</button>}
        { showHint && <p>{wordDescription}</p> }
    </div>
  )
}

export default Hint
