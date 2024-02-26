import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from '../sidebar/Sidebar'


const navbar: React.FC = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span initial={{opacity: 0, scale: 0.5}}
         animate={{opacity: 1, scale: 1}} 
         transition={{duration: 0.5}}></motion.span>
        <div className='Logo'>
          <img src='/Mylogo2.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default navbar
