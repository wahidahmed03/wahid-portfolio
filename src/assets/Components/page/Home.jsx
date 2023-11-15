import React from 'react'
import HeroSection from '../Section/Section/HeroSection'
import ServiceSection from '../Section/Section/ServiceSection'
import ContactSection from '../Section/Section/ContactSection'
import DetelsSection from '../Section/Section/DetelsSection'
import ProrfolieSection from '../Section/Section/ProrfolieSection'
import PriceSection from '../Section/Section/PriceSection'

function Home() {
  return (
    <div>
        <HeroSection />
        <ServiceSection />
        <DetelsSection />
        <ProrfolieSection />
        <PriceSection />
        <ContactSection />
        
    </div>
  )
}

export default Home