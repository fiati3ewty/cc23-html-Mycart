import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/Navbar'
import Mycart from './components/Mycart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/cart" element={<Mycart />} />
    </Routes>
  </Router>
  )
}

export default App
