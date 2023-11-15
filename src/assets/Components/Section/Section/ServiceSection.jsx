import React from 'react'
import BackgroundColor from '../Bg/BackgroundColor'
import ServiceCom from '../SectionComponents/ServiceSectionCom/ServiceCom'

function ServiceSection() {
  return (
    <div>
      <div className=' relative'>
          <div className="">
              <BackgroundColor size={'180px'} positionone={"lg:top-[150px] lg:left-[130px] "} positiontwo={"top-[450px] right-[150px]"} background={'h-[2350px] sm:h-[1500px] md:h-[1100px] lg:h-[1000px] xl:h-screen'}/>
          </div>
          <div className="top-0 absolute xl:w-screen xl:h-screen w-full h-full flex justify-center items-center">
            <ServiceCom />
          </div>
      </div>
    </div>
  )
}

export default ServiceSection