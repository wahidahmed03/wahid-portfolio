import React, { useState, useEffect } from 'react';

// IMPORT
import TextTepeAnimationchild from './TextTepeAnimationchild';

const im = ['webdeveloper',  'webdesigner','figma Designer','wordpress expert', 'elementor Expert', 'webflow designer'];
const avelable  = ['upwork',  'fiver',];





//
const TextCss = "uppercase lg:text-[30px] text-[18px] font-bold flex text-center gap-2" 

function TextTepeAnimationParent() {

  const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500'];
const [currentColorIndex, setCurrentColorIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);

const currentColor = colors[currentColorIndex];

  return (
    <div className={` ${currentColor} w-[90%]  lg:flex`}>
        <div className={`${TextCss} lg:w-[57%] `}>I'm <TextTepeAnimationchild  texts={im} /></div>
        <div className={`${TextCss} `}>Able ON<TextTepeAnimationchild texts={avelable} /></div>
    </div>
  )
}

export default TextTepeAnimationParent