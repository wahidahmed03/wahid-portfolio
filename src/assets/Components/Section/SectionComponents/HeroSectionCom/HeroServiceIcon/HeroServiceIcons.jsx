import React from 'react'

function HeroServiceIcons(props) {

    const {serviceName, ServiceIcon} =props.WokrIcon

  return (
    <div >
        <div className="h-[150px] w-[80%]   flex flex-col justify-center items-center">
            <img src={ServiceIcon} className='p-4 bg-white rounded-full h-[90px] w-[90px] -mb-8 z-10 ' alt="" />
            <div className="w-full h-full bg-blue-600 rounded-xl flex justify-center items-center text-white font-bold ">
                <p>{serviceName}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroServiceIcons