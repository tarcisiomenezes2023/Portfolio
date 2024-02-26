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
        <div className='social'>
            <a href='https://github.com/tarcisiomenezes2023' target='blank'><img src='/github.png' alt='github'/></a>
            <a href='https://www.linkedin.com/in/tarc%C3%ADsio-menezes-03b8a0233/' target='blank'><img src='/linkedin.png' alt='linkedln'/></a>
            <a href='https://www.instagram.com/tarcisio.menezes19/' target='blank'><img src='/instagram.png' alt='instagram'/></a>
            <a href='https://www.facebook.com/profile.php?id=100092629518329' target='blank'><img src='/facebook1.png' alt='facebook'/></a>
            <a href='mailto:Tarcisiomenezes2019@hotmail.com'><img src='/outlook.png' alt='e-mail'/></a>
        </div>
      </div>
    </div>
  )
}

export default navbar
