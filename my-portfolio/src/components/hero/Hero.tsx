import React from 'react'
import "./hero.scss"
import { px } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <div className='hero'>
        <div className='textContainer'>
            <h2>TARCÍSIO MENEZES</h2>
            <h1>Web Developer</h1>
        <div className='social'>
            <img src='/github.png' alt='' />
            <img src='/linkedin.png' alt='' />
            <img src='/instagram.png' alt='' />
            <img src='/facebook1.png' alt='' />
            <img src='outlook.png' alt='' />
        </div>
        
        <svg height="40px" width="40px" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
        </svg>
        </div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='My profile' />
      </div>
    </div>
  )
}

export default Hero
