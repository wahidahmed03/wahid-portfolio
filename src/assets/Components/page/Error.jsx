import React from 'react'
import { useRouteError } from "react-router-dom";



import Navbar from '../Section/SectionComponents/HeroSectionCom/Navbar/Navbar'
const nofoundpage = "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xdXNhtYb8d36NdkEIkLt1tCSuDVZWNlHhhNEDUc0uWk_GDOWxPF08Bpu15g7a8oign5WrMHioE2oRM0rLAZyveIZIGXQ=w1920-h982"
function Error() {

    const error = useRouteError();


  return (
    <div className='w-screen h-screen bg-white'  id="error-page">
       <div className="">
        <div className=' bg-blue-950'>
            <Navbar />
        </div>
       </div>
       <div className="flex justify-center items-center">
         <div>
             <img src={nofoundpage} alt="" />
         </div>
       </div>
    </div>
  )
}

export default Error