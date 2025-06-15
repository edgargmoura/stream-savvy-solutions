
import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/logo_egmwatertechsol.png" 
              alt="EGM Water TechSol" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Sustainable innovation in sanitation and environmental engineering. 
              Transforming the future with cutting-edge technology and sustainable practices.
            </p>
            <div className="text-gray-300">
              <p>Austin, Texas, United States</p>
              <p>Phone: (512) xxx-xxxx</p>
              <p>Email: info@egmwater.com</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/quem-somos" className="hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Environmental Consulting</li>
              <li>Automation & Monitoring</li>
              <li>Green Technologies</li>
              <li>Infrastructure Projects</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EGM Water TechSol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
