import React, { useState, useEffect } from 'react';

function TextTepeAnimationchild ({ texts }) {
  
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
   
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentText.length === texts[index].length) {
          clearInterval(interval);
          setTimeout(() => {
            const nextIndex = (index + 1) % texts.length;
            setIndex(nextIndex);
            setCurrentText('');
          }, 800); // Delay before clearing text
        } else {
          setCurrentText(texts[index].substring(0, currentText.length + 1));
        }
      }, 100); // Typing speed
  
      return () => clearInterval(interval);
    }, [currentText, index, texts]);
  
    return (
      <div className=" uppercase  text-[18px] lg:text-[30px] font-bold">
         <span>{currentText}</span>
      </div>
    );
  };
  

export default TextTepeAnimationchild