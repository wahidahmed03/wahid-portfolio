import React, { useState, useEffect } from 'react';

// IMPORT COMPONETS
import ContactLocation from './ContactLocation'
import ContactFrom from './ContactFrom'

function ContactFromMain() {

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
    <div className="flex flex-col">
      <div className="w-full h-[100px] text-center text-white">
        <h1  className='text-5xl font-bold' >CONTACT US</h1>
        <p>GET IN TOUCH WITH US</p>
      </div>
      <div className={`lg:w-[900px] lg:h-[500px] lg:flex w-[85%] h-[1100px] md:h-[1050px] md:w-[90%]  ${currentColor} ${currentColor2} rounded-tl-[200px] rounded-br-[200px] hover:scale-105 transition duration-300`}>
        <div className="lg:w-2/4 lg:h-full ">
          <ContactLocation /> 
        </div>
        <div className="lg:w-2/4 lg:mr-9">
          <ContactFrom />
        </div>
      </div>
    </div>
  )
}

export default ContactFromMain