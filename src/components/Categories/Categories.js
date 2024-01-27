import React, { useState } from 'react'
import './Categories.scss'

const Categories = ({ categories, category, setCategory, changeWordList, play }) => {

    const [showCategories, setShowCategories] = useState(false)

    function handleChange(e) {        
        setCategory(e.target.value)
        changeWordList(e.target.value)
    }

    function handleApply() {
        play()
        setShowCategories(false)
    }

  return (
    <div className='categories-container'>
  
        {!showCategories && (<div>
            <span className='categories-label'>category:&nbsp;</span><span className='category'>{category}</span>
            <button className='btn-change-category' onClick={() => setShowCategories(true)}>change</button>
            </div>)}
    
        {showCategories && (<div>
                <select name="categories" className='dropdown' value={category} onChange={handleChange}>
                    {categories.map((category) => {
                        return (<option className='dropdown-option'  value={category} key={category}>{category}</option>)
                    })}         
                </select>
                <button className='btn-apply-change' onClick={handleApply}>apply</button>
            </div>)}

    </div>
  )
}

export default Categories
