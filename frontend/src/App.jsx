import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function getHello() {
    const greet = document.getElementById('greet')
    fetch(import.meta.env.VITE_API_SERVER + '/api/hello')
      .then(response => response.json())
      .then(data => greet.innerHTML = JSON.stringify(data))
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(getHello);

  return (
    <BrowserRouter>
    <div className="pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <p>
        api called: <code id="greet"></code>
      </p>
    </div>
    </BrowserRouter>
  )
}

export default App
