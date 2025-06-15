
import React from 'react'
import Hero from '../components/Hero'
import FeaturedServices from '../components/FeaturedServices'
import AboutSection from '../components/AboutSection'
import TechnologySection from '../components/TechnologySection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <AboutSection />
      <TechnologySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default HomePage
