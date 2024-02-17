import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './test.scss';

const Test: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    visible: { opacity: 1, x:600, transition:{type: "spring", stiffness: 100, damping: 100} },
    hidden: { opacity: 0 },
  };

  const items = [
    "item1", "item2", "item3", "item4"
  ]

  return (
    <div className='course'>
      <motion.ul>
      {items.map((item) => (
        <motion.li key={item}>{item}</motion.li>
      ))}
      </motion.ul>
    </div>
  );
};

export default Test;