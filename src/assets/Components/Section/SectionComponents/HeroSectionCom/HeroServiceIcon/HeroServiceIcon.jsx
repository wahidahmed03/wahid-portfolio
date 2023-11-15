import React from 'react'

import HeroServiceIconjson from "./HeroServiceIcon.json"
import HeroServiceIcons from './HeroServiceIcons'

function HeroServiceIcon() {
  return (
    <div className="">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
            {HeroServiceIconjson.map((WokrIcon, index)=>(
                <HeroServiceIcons WokrIcon={WokrIcon} key={index} />
            ))}
        </div>
    </div>
  )
}

export default HeroServiceIcon