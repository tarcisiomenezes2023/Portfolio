import React from 'react';
import "./hero.scss";
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollArrow: {
    y: [-10, 10], 
    transition: {
      y: {
        duration: 0.5,
        repeat: Infinity, 
        repeatType: "reverse", 
      },
    },
  },
};

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
          <motion.h2 variants={textVariants}>TARCÍSIO MENEZES</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <div className='social'>
            <img src='/github.png' alt='' />
            <img src='/linkedin.png' alt='' />
            <img src='/instagram.png' alt='' />
            <img src='/facebook1.png' alt='' />
            <img src='outlook.png' alt='' />
          </div>
          <motion.svg variants={textVariants} animate="scrollArrow" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
          </motion.svg>
        </motion.div>
      </div>
      <div className='slidingTextContainer'>
        Open Source Passionate Enthusiast Dreamer
      </div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='My profile' />
      </div>
    </div>
  );
}

export default Hero;