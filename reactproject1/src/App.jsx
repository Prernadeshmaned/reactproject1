import { useState } from 'react'
import Table1 from './Components/Table1'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    
      <Routes>
          <Route path="/" element={<Table1 />} />
      </Routes>
  )
}

export default App
