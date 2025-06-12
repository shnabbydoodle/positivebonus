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
import bg0 from './assets/bg.jpg'
import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import bg4 from './assets/bg4.jpg'

import Header from './components/header'


function App() {
  const last =localStorage.getItem("bg")
  const location = useLocation()
  const arr = [bg0,bg1,bg2,bg3,bg4]
  let bg = ""
  let index= 0
  while(true){
    console.log("While loop")
    index = Math.floor((Math.random()*10)%5)
    console.log(index.toString())
    console.log(last)
    if(index.toString() != last){
      console.log("Iff")
      bg= arr[index]
      break
    }
  }

  window.localStorage.setItem("bg",index.toString())

  
  
  
  useEffect(() => {
    // Add background class only on home page
    //except im gonna put it on everything for now
    /*if (location.pathname === '/') {
      document.body.classList.add('homepage-bg')
    } else {
      document.body.classList.remove('homepage-bg')
    }    */
   document.body.style.backgroundImage ='url('+bg+')'
   document.body.classList.add('homepage-bg') //this adds it to everything
  }, [location.pathname])

  return (
    <>
    <div></div>
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