/**import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'**/
import { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import Header from './components/header'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Add background class only on home page
    if (location.pathname === '/') {
      document.body.classList.add('homepage-bg')
    } else {
      document.body.classList.remove('homepage-bg')
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <div className='content'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
    </>
  )
}

export default App