import React from 'react'
import './Header.scss'

const Header = (playable) => {

  return (
    <div className='header'>
     <h1 className='title-game'>Hangman</h1>
     {playable && <p className='p-instructions'>Enter a letter!</p>}
    </div>
  )
}

export default Header
