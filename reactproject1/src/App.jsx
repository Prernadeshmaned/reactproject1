import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    
      <Routes>
          <Route path="/" element={<Dashboard />} />
      </Routes>
  )
}

export default App
