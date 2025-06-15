
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import QuemSomosPage from './pages/QuemSomosPage'
import ContatoPage from './pages/ContatoPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quem-somos" element={<QuemSomosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
