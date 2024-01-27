import React from 'react'
import './Hint.scss'

const Hint = ({ showHint, setShowHint, selectedWord, list }) => {

    let wordDescription = list.find((e) => (e.word === selectedWord))

  return (
    <div className='hint'>
        { !showHint && <button className='btn' id='btn-hint' onClick={() => setShowHint(true)}>Hint</button>}
        { (showHint && wordDescription) && <p>{wordDescription.hint}</p> }
    </div>
  )
}

export default Hint
