
import React, { useState } from 'react'
import { submitContactForm } from '../lib/supabase'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setShowSuccess(false)
    setShowError(false)
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || undefined,
        company: formData.get('company') as string || undefined,
        service_interest: formData.get('service_interest') as string || undefined,
        message: formData.get('message') as string || undefined,
      }

      await submitContactForm(data)
      
      setShowSuccess(true)
      e.currentTarget.reset()
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMessage(error instanceof Error ? error.message : 'There was an error submitting your form. Please try again.')
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
            <select 
              id="service" 
              name="service_interest" 
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
            >
              <option value="">Select a service</option>
              <option value="Environmental Consulting">Environmental Consulting</option>
              <option value="Infrastructure Projects">Infrastructure Projects</option>
              <option value="Green Technologies">Green Technologies</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Research & Development">Research & Development</option>
              <option value="Automation & Monitoring">Automation & Monitoring</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
            />
          </div>
          
          <div className="flex items-start mb-6">
            <input 
              id="privacy" 
              name="privacy" 
              type="checkbox" 
              required
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
            />
            <label htmlFor="privacy" className="ml-3 block text-sm text-gray-600">
              I agree to the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</a> and consent to the processing of my personal data for the purpose of responding to my inquiry. *
            </label>
          </div>
          
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex">
                <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {showError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {errorMessage}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
              {isSubmitting && (
                <svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
