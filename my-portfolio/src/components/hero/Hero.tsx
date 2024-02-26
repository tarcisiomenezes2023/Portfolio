import React from 'react'
import "./hero.scss"

const Hero: React.FC = () => {
  return (
    <div className='hero'>
        <div className='textContainer'>
        <h2>TARCÍSIO MENEZES</h2>
        <h1>Web Developer</h1>
        </div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='My profile' />
      </div>
    </div>
  )
}

export default Hero
