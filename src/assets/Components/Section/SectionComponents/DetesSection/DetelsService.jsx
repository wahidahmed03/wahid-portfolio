import React, { useState, useEffect } from 'react';

import { FaArrowRight } from "react-icons/fa6";

import HeroDetelsSection from './DetelsService.json'

function DetelsService() {

    
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
                <div className="">
                <div className="w-full h-[100px] text-center text-white">
                        <h1  className='lg:text-5xl text-xl sm:text-2xl md:rexr-3xl font-bold' >BUY PLATEFROM SERVICE</h1>
                        <p>WE WORK WITH YOU NOT FPR YOU</p>
                        </div>
                <div className="grid lg:grid-cols-3 lg:gap-5 gap-2 md:grid-cols-3 grid-cols-2  " >  
                    {HeroDetelsSection.map((service, index)=>(
                        <a className='lg:w-[400px] sm:[120px]' href={service.url} key={index} >
                        <div className={`"w-[fullpx] h-[70px]  flex rounded ml-1 mr-1 hover:scale-125 transition duration-300 relative ${currentColor} ${currentColor2}`} key={index}>
                                <div className=" ml-2 flex justify-center items-center"  >
                                    <img className='lg:h-14 lg:w-14 h-8 w-8 rounded-full bg-white object-cover' src={service.img} alt="" />
                                </div>
                                <div className="flex justify-center  ml-3 flex-col">
                                <h3 className='text-white lg:text-2xl md:text-lg text-sm font-bold'>{service.Name}</h3>
                                <p className='text-white md:text-xs text-[14px] ' >{service.discrip}</p>
                                </div>
                                <div className=" absolute w-[120px] right-2 justify-end  items-center flex h-full text-white">
                                    <div className="w-[60px] h-[60px] border-2 flex justify-center items-center	 border-white rounded-full">
                                         <FaArrowRight size='25px' className='-rotate-45	' />
                                    </div>
                                </div>
                    </div> 
                        </a>        
                    ))}

                    
                </div>
                </div>
</>
)
}


export default DetelsService