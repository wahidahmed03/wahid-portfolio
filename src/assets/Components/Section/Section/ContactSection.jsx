import React from 'react'
import ContactFromMain from '../SectionComponents/ContactFromCom/ContactFromMain'
import BackgroundColor from '../Bg/BackgroundColor'

function ContactSection() {
  return (
    <div className=' relative w-full'>
            <div className="">
                <BackgroundColor size={'180px'} positionone={"lg:top-[150px] lg:left-[130px] "} positiontwo={"top-[450px] right-[150px]"} background={'h-[1400px] sm:h-[1500px] md:h-[1100px] lg:h-[1000px] xl:h-screen'}/>
            </div>
            <div className="top-0 absolute xl:w-screen xl:h-screen w-full h-full flex justify-center items-center">
                <ContactFromMain />
            </div>
   </div>
  )
}

export default ContactSection