import React from 'react'
import "./contact.scss"
import { motion } from "framer-motion"


const variants = {
    initial: {
        y: 500, 
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
        },
};


const Contact: React.FC = () => {
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className='item'>
            <h2>Mail</h2>
            <span>tarcisiomenezes2019@hotmail.com</span>
        </motion.div>
        <motion.div variants={variants} className='item'>
            <h2>City</h2>
            <span>Gödöllő, HU</span>
        </motion.div>
        <motion.div variants={variants} className='item'>
            <h2>Phone</h2>
            <span>+36 20 3173408</span>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
      
        <form>
            <input type='text' required placeholder='Name' />
            <input type='email' required placeholder='Email' />
            <textarea rows={8} placeholder='Message' />
            <button>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
