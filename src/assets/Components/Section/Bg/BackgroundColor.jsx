import React, { useState, useEffect } from 'react';

// IMPORT ICON
import { FaPlus ,FaRegCircle,  } from "react-icons/fa";





function BackgroundColor(props) {
  //
  const { /* ICON SIZE*/ size, /* ICONPOSITION */ positionone, positiontwo, /* BACKGROUND SIZE */ background} = props

  // COLOR NAME FOR DAYANAMIC COLOR
  const colors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600'];
  const colorst = ['text-purple-600', 'text-yellow-600', 'text-red-600', 'text-blue-600', 'text-green-600',];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[currentColorIndex];
  const currentColor2 = colorst[currentColorIndex];


  // TAILWIND CSS CODE
  const continer= "bg-gray-900  w-screen flex"


  return (
    <div className={`${continer} ${background} relative`} >
      <div className=" w-[30%] bg-blue-700 "></div>
      <div className=" w-[70%] bg-gray-900 "></div>
      <FaPlus  size={size}  className= {`absolute top-10 ${currentColor} ${positionone}`}/>
      <FaRegCircle  size={size}  className= {`absolute top-10 ${currentColor2} ${positiontwo}`} />
    </div>
  )
}

export default BackgroundColor