import React from 'react';

const Links: React.FC = () => {
  const items = [
    "Homepage",
    "About",
    "Skills",
    "Contact",
    "Download CV",
  ];

  return (
    <div className='links'>
      {items.map(item => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
