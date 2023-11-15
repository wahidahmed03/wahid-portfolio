import { useEffect, useState } from 'react'
import './App.css'

import {  createBrowserRouter, RouterProvider, } from "react-router-dom";


import Home from './assets/Components/page/Home'
import About from './assets/Components/page/About'
import ContactUs from './assets/Components/page/ContactUs'
import Service from './assets/Components/page/Service'
import Protfolieo from './assets/Components/page/Protfolieo'
import Error from './assets/Components/page/Error'





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About /> ,
  },
  {
    path : "Services",
    element: <Service /> ,
  },
  {
    path : "protfolieo",
    element: <Protfolieo /> ,
  },
  {
    path: "contactUs",
    element: <ContactUs /> ,
  },

]);


//MASSENJAR CHAT 




function App() {
     

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
