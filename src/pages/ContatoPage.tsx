
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const ContatoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contato.png" 
            alt="Modern office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-800/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-300">
              Estamos prontos para ajudar com soluções personalizadas para suas necessidades de engenharia ambiental e saneamento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-slate-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-700">Telefone</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">Escritório Principal:</p>
                  <p className="text-xl font-semibold text-slate-800">(512) xxx-xxxx</p>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-stone-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-lg bg-stone-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-stone-700">Email</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-stone-600 text-sm font-medium mb-1">Informações Gerais:</p>
                  <p className="text-xl font-semibold text-stone-800">info@egmwater.com</p>
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-zinc-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-lg bg-zinc-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-700">Escritório Principal</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-600 text-sm font-medium mb-1">Endereço:</p>
                  <p className="text-lg font-semibold text-zinc-800">
                    123 Lorem ipsum<br/>
                    Austin, TX 78701<br/>
                    Estados Unidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicite uma Consulta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContatoPage
