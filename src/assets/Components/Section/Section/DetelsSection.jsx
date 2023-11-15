import React from 'react'


import BackgroundColor from '../Bg/BackgroundColor'
import DetelsService from '../SectionComponents/DetesSection/DetelsService'



function DetelsSection() {
  return (
    <>
    <div className=' relative'>
       <div className="">
              <BackgroundColor size={'180px'} positionone={"lg:top-[250px] lg:left-[130px] "} positiontwo={"top-[250px] right-[150px]"} background={'h-[590px] sm:h-[550px] md:h-[420px] lg:h-[570px] xl:h-[570px]'}/>
       </div>
       <div className="top-0 absolute  w-full h-full flex justify-center items-center">
            <DetelsService />
        </div>
    </div>
    </>
  )
}

export default DetelsSection