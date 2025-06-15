
import React from 'react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "EGM Water TechSol's consulting was fundamental in optimizing our effluent treatment system, reducing operational costs by 30% and ensuring environmental compliance.",
      author: "Maria Silva",
      role: "Operations Director",
      company: "Sustainable Textile Industry",
      image: "https://images.unsplash.com/photo-1494790108755-2616c27b9bb9?w=400"
    },
    {
      quote: "The implementation of the automation and remote monitoring system developed by Edgar's team revolutionized our water resource management, enabling real-time data-driven decisions.",
      author: "Carlos Mendes",
      role: "Environmental Secretary",
      company: "City of Austin",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      quote: "The technical training offered by EGM Water TechSol prepared our team to excellently manage our treatment station, resulting in more efficient and sustainable operation.",
      author: "Ana Ferreira",
      role: "Sustainability Manager",
      company: "GreenBuild Construction",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work in partnership with companies and institutions that value sustainability and technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
