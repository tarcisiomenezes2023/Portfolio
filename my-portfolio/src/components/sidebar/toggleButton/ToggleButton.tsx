import React from 'react';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<Props> = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      Button
    </button>
  );
};

export default ToggleButton;
