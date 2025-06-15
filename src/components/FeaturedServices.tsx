
import React from 'react'

const FeaturedServices: React.FC = () => {
  const services = [
    {
      title: 'Environmental Consulting',
      description: 'Technical advisory and compliance solutions for environmental regulations and best practices in sanitation.',
      image: '/consultoria_ambiental.png',
      highlight: 'slate'
    },
    {
      title: 'Automation & Monitoring',
      description: 'Implementation of automated systems and real-time monitoring for water and sewage treatment plants.',
      image: '/automação_monitoramento.png',
      highlight: 'zinc'
    },
    {
      title: 'Green Technologies',
      description: 'Development and integration of sustainable technologies for efficient and eco-friendly treatment processes.',
      image: '/tecnologias_verdes.png',
      highlight: 'stone'
    },
    {
      title: 'Infrastructure Projects',
      description: 'Design and implementation of complete sanitation infrastructure adapted to different scales and contexts.',
      image: '/projetos_infraestrutura.png',
      highlight: 'neutral'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for environmental engineering challenges, from consulting to implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-${service.highlight}-300 bg-${service.highlight}-50/30`}
            >
              <div className="relative h-48 overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-grow text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
