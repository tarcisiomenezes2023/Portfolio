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

const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-450%",
    transition: {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 20,
    },
    },
  };


const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
          <motion.h2 variants={textVariants}>TARCÍSIO MENEZES</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <div className='social'>
            <a href='https://github.com/tarcisiomenezes2023' target='blank'><img src='/github.png' alt='' /></a>
            <a href='https://www.linkedin.com/in/tarc%C3%ADsio-menezes-03b8a0233/' target='blank'><img src='/linkedin.png' alt='' /></a>
            <a href='https://www.instagram.com/tarcisio.menezes19/' target='blank'><img src='/instagram.png' alt='' /></a>
            <a href='https://www.facebook.com/profile.php?id=100092629518329' target='blank'><img src='/facebook1.png' alt='' /></a>
            <a href='mailto: tarcisiomenezes2019@hotmail.com'><img src='outlook.png' alt='' /></a>
          </div>
          <motion.svg variants={textVariants} animate="scrollArrow" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
          </motion.svg>
        </motion.div>
      </div>
      <motion.div className='slidingTextContainer'
       variants={SliderVariants} initial="initial" animate="animate">
        <span>Open Source</span> Passionate Enthusiast Dreamer
      </motion.div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='My profile' />
      </div>
    </div>
  );
}

export default Hero;