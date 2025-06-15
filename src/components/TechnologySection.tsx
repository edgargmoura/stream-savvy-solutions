
import React from 'react'

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      title: "Internet of Things (IoT)",
      description: "Smart sensors for real-time monitoring of water quality parameters and operational efficiency.",
      image: "/iot_dascoisas.png",
    },
    {
      title: "Advanced Biofiltration",
      description: "Natural systems enhanced by technology for efficient treatment with minimal environmental impact.",
      image: "/biofiltracao_avancada.png",
    },
    {
      title: "Integrated Renewable Energy",
      description: "Solar energy and energy recovery systems that make treatment plants self-sufficient.",
      image: "/energia_renovavel.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integration of advanced technologies in services to make sanitation more efficient and sustainable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
