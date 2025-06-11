/**import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'**/
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
