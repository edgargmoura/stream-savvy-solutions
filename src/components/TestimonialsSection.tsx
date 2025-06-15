
import React from 'react'

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      title: "Environmental Director",
      company: "Green Corp",
      content: "EGM Water TechSol transformed our water treatment approach with innovative solutions that exceeded our expectations.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "John Smith",
      title: "Operations Manager",
      company: "Clean Water Inc",
      content: "The automation systems implemented by EGM have significantly improved our operational efficiency and reduced costs.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Ana Rodriguez",
      title: "Sustainability Coordinator",
      company: "Eco Solutions",
      content: "Their expertise in environmental engineering helped us achieve our sustainability goals ahead of schedule.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the organizations we've helped transform their environmental impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
