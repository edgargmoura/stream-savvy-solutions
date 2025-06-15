
import React from 'react'

const FeaturedServices: React.FC = () => {
  const services = [
    {
      title: 'Environmental Consulting',
      description: 'Specialized analysis, diagnostics, and recommendations for environmental compliance and resource optimization.',
      image: '/consultoria_ambiental.png',
    },
    {
      title: 'Infrastructure Projects',
      description: 'Planning, execution, and management of infrastructure projects focused on sustainability and efficiency.',
      image: '/projetos_infraestrutura.png',
    },
    {
      title: 'Green Technologies',
      description: 'Development and implementation of sustainable technologies such as biofiltration, water reuse, and renewable energy.',
      image: '/tecnologias_verdes.png',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrated solutions in sanitary and environmental engineering for various sectors and needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
