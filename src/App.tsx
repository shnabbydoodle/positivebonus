/**import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'**/
import { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import StartPage from './pages/start'
import VocabPage from './pages/vocabulary'
import DefensePage from './pages/defense'
import AdvantagePage from './pages/advantage'
import NeutralPage from './pages/neutral'
import OffensePage from './pages/offense'
import CombosPage from './pages/combos'

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
        <Route path="/start" element={<StartPage />} />
        <Route path="/vocabulary" element={<VocabPage />} />
        <Route path="/defense" element={<DefensePage />} />
        <Route path="/advantage" element={<AdvantagePage />} />
        <Route path="/neutral" element={<NeutralPage />} />
        <Route path="/offense" element={<OffensePage />} />
        <Route path="/combos" element={<CombosPage />} />
      </Routes>
      </div>
    </>
  )
}

export default App