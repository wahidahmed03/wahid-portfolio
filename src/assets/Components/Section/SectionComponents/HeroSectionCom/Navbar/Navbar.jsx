import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";


import DarkModeButton  from './DarkModeButton';

const Navbar = () => {
    const ADesign = "text-blue-500 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:bg-blue-700 "
    const [isOpen, setIsOpen] = useState(false);
    const [pink , setpink] = useState('')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };






  return (
    <nav className=''>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white  text-5xl font-semibold flex">W<h2 className='text-white font-extrabold'>A</h2></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
            <Link to={`/`}           className={`${ADesign} `} >Home</Link>
            <Link to={`/about`}      className={ADesign} >About</Link>
            <Link to={`/Services`}   className={ADesign} >Services</Link>
            <Link to={`/Protfolieo`} className={ADesign} >Protfolieo</Link>
            <Link to={`/ContactUs`} className={ADesign} >Contact</Link>
            </div>
          </div>
          {/* <div className="flex gap-1">
              <button className='h-10 w-10 rounded-full text-blue-500 text-3xl flex justify-center items-center'><DarkModeButton /></button>
             
          </div> */}

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to={`/`}           className={ADesign} >Home</Link>
            <Link to={`/about`}      className={ADesign} >About</Link>
            <Link to={`/Services`}   className={ADesign} >Services</Link>
            <Link to={`/Protfolieo`} className={ADesign} >Protfolieo</Link>
            <Link to={`/ContactUs`} className={ADesign} >Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;