import React from 'react'
import PriceForHome from '../SectionComponents/Price/PriceForHome'

function PriceSection() {
  return (
    <div>
      <div>
        <div className="w-full bg-blue-950 flex flex-col justify-center items-center text-white">
            <PriceForHome />
        </div>
     </div>
    </div>
  )
}

export default PriceSection