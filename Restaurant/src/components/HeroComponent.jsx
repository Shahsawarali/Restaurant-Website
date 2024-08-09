import React from 'react'
import "./HeroComponent.css"

function HeroComponent() {
  return (
    <div className='hero-container'>
        <div>
            <input type="text" placeholder='Search for food' />
            <button>Search</button>
        </div>
    </div>
  )
}

export default HeroComponent