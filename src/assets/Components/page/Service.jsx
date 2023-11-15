import React from 'react'
import Navbar from '../Section/SectionComponents/HeroSectionCom/Navbar/Navbar'
import PriceSection from '../Section/Section/PriceSection'
import DetelsSection from '../Section/Section/DetelsSection'

function Service() {
  return (
    <div>
      <div className=" relative">
        <div>
              <Navbar />
        </div>
      </div>
      <div className=" absolute top-0  -z-10">
          <div>
            <DetelsSection />
          </div>
          <div>
            <PriceSection />
          </div>
      </div>
    </div>
  )
}

export default Service