import React from 'react'
import Navbar from '../Section/SectionComponents/HeroSectionCom/Navbar/Navbar'
import ProrfolieSection from '../Section/Section/ProrfolieSection'

function Protfolieo() {
  return (
    <div>
      <div className=" relative ">
          <div>
              <Navbar />
          </div>
      </div>
      <div className=" absolute top-0 -z-10">
          <div>
            <ProrfolieSection />
          </div>
      </div>
    </div>
  )
}

export default Protfolieo