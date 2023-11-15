import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";


import WorkExzample from './WorkExample.json'



function WorkExample() {

        // TAILWIND COLOR CODE FOR DAYANAMIC
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500'];
        const colors2 = ['bg-red-900/50', 'bg-blue-900/50', 'bg-green-900/50', 'bg-purple-900/50', 'bg-yellow-900/50'];
        const [currentColorIndex, setCurrentColorIndex] = useState(0);
    
        // USEEFFECT FOR CHANGING COLOR
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
          }, 2000);
      
          return () => clearInterval(interval);
        }, []);
    
        // TAILWIND COLOR CODE FOR DAYANAMIC
        const currentColor = colors[currentColorIndex];
        const currentColor2 = colors2[currentColorIndex];


  return (
    <>
    <div className="grid lg:grid-cols-4 lg:gap-10 gap-1 md:grid-cols-3 grid-cols-2 " >
        
        {WorkExzample.map((workExzam, index)=>(

              <Link to={`/`} key={index} >
            <div className={`"w-[260px] h-[70px]  flex rounded ml-1 mr-1 hover:scale-125 transition duration-300 ${currentColor} ${currentColor2}`} key={index}>
            <div className=" ml-2 flex justify-center items-center"  >
                <img className='lg:h-14 lg:w-14 h-8 w-8 rounded-full bg-white' src={workExzam.icon} alt="" />
            </div>
            <div className="flex justify-center  ml-3 flex-col">
               <h3 className='text-white lg:text-2xl md:text-xl text-sm font-bold'>{workExzam.title}</h3>
               <p className='text-white md:text-xs text-[14px] ' >{workExzam.discrip}</p>
            </div>
        </div> 
           </Link>
     
        ))}

        
    </div>
    </>
  )
}

export default WorkExample