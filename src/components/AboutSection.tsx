
import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About EGM Water TechSol
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded by Edgar Moura, a chemist and postgraduate in environmental engineering and basic sanitation with solid experience in environmental sanitation and water supply systems.
            </p>
            <p className="text-gray-600 mb-6">
              Based in Austin, Texas, EGM Water TechSol offers integrated and innovative solutions in environmental engineering, operating in technical consulting, green technology development, sanitation system automation, project management, professional education, and applied research.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/engenheiros.png" 
              alt="Environmental engineers" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
