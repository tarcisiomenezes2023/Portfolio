import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './sidebar.scss';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },

  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};


const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
      <a href='https://github.com/tarcisiomenezes2023' target='blank'><img src='/github.png' alt='' /></a>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
