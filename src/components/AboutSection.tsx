
import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of Environmental Engineering
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At EGM Water TechSol, we believe that technological innovation and environmental responsibility go hand in hand. Our team of experts works tirelessly to develop solutions that not only meet today's challenges but also preserve resources for future generations.
            </p>
            <p className="text-gray-600 mb-8">
              From water treatment systems to sustainable infrastructure projects, we're committed to delivering excellence in every aspect of environmental engineering.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/engenheiros.png" 
              alt="Environmental engineers" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
