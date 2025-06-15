
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const QuemSomosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/quem_somos.png" 
            alt="Engenheiros trabalhando" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-800/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
            <p className="text-xl text-gray-300">
              Uma equipe comprometida com a excelência técnica e a transformação sustentável através da engenharia ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fundada por Edgar Moura, químico e pós-graduado em engenharia ambiental e saneamento básico com sólida experiência em saneamento ambiental e gestão de sistemas de água, a EGM Water TechSol nasce com a missão de transformar a relação entre desenvolvimento urbano e sustentabilidade.
              </p>
              
              <p className="text-gray-600 mb-6">
                Com sede em Austin, Texas, a EGM Water TechSol oferece soluções integradas e inovadoras em engenharia ambiental, atuando nas áreas de consultoria técnica, desenvolvimento de tecnologias verdes, automação de sistemas de saneamento, gestão de projetos, educação profissional e pesquisa aplicada.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/medidores.png" 
                alt="Medidores de água" 
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

export default QuemSomosPage
