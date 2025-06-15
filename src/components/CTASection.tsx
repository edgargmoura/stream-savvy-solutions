
import React from 'react'
import { Link } from 'react-router-dom'

const CTASection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Environmental Impact?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Let's work together to create sustainable solutions that benefit both your organization and the environment.
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-md font-medium text-lg transition-colors duration-200"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  )
}

export default CTASection
