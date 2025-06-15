
import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/eta.png" 
          alt="Water treatment facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-800/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-800/50 text-gray-300 text-sm font-medium mb-5">
            Sanitation and Environmental Engineering
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Sustainable Innovation in Sanitation and Environmental Engineering
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We combine technical expertise and sustainable technologies to create sanitation solutions that preserve natural resources and promote a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Request a Consultation
            </Link>
            
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
