import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
function App() {

  return (
    
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
  )
}

export default App
