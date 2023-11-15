import React from 'react'
import BackgroundColor from '../Bg/BackgroundColor'
import Navbar from '../SectionComponents/HeroSectionCom/Navbar/Navbar'
import HeroDetelsSection from '../SectionComponents/HeroSectionCom/HeroDetelsSection/HeroDetelsSection'
import HeroServiceIcon from '../SectionComponents/HeroSectionCom/HeroServiceIcon/HeroServiceIcon'
import WorkExample from '../SectionComponents/HeroSectionCom/WorkExaample/WorkExample'

function HeroSection() {

    const responsetsilwind = "w-screen  sm-w-[640px] md:w-768px lg:w-[1024] xl-[1280px] " 

  return (
    <div className='h-[1000px] lg:h-[790px]'>
        <div className={`${responsetsilwind} relative`} >
           <BackgroundColor size={'180px'} positionone={"lg:top-[150px] lg:left-[130px] "} positiontwo={"top-[450px] right-[150px]"} background={'h-[1050px] lg:h-screen'}/>
        </div>
        <div className={`${responsetsilwind} absolute top-0 xl:w-screen lg:h-[790px]  `}>
            <div className="h-[16%]  ">
                <Navbar />
            </div>
            <div className="h-[65%] lg:mt-750px flex flex-row justify-center items-center  ">
                <HeroDetelsSection />
            </div>
            <div className=" w-full sm:mt-12   flex justify-center h-[60px] items-center lg:mt-[60px]">
               <div className="lg:w-[80%]  h-full">
                    <WorkExample />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection