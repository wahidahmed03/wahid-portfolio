import React from 'react'
import ContactSection from '../Section/Section/ContactSection'
import Navbar from '../Section/SectionComponents/HeroSectionCom/Navbar/Navbar'

function ContactUs() {
  return (
    <div>
      <div className=" relative ">
          <div>
              <Navbar />
          </div>
      </div>
      <div className=" absolute top-0 -z-10">
          <div>
            <ContactSection />
          </div>
      </div>
    </div>
  )
}

export default ContactUs