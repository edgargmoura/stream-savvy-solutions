
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/quem_somos.png" 
            alt="Engineers working" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-800/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300">
              A team committed to technical excellence and sustainable transformation through environmental engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Edgar Moura, a chemist and postgraduate in environmental engineering and basic sanitation with solid experience in environmental sanitation and water supply systems, EGM Water TechSol was born with the mission to transform the relationship between urban development and sustainability.
              </p>
              
              <p className="text-gray-600 mb-6">
                Based in Austin, Texas, EGM Water TechSol offers integrated and innovative solutions in environmental engineering, operating in the areas of technical consulting, green technology development, sanitation system automation, project management, professional education, and applied research.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/medidores.png" 
                alt="Water meters" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
