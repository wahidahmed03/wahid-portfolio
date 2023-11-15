import React, { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className="p-2 rounded-lg  transition-colors dark:text-white text-blue-500" 
      onClick={toggleDarkMode}
    > <BsFillSunFill />
    </button>
  );
};

export default DarkModeButton;
