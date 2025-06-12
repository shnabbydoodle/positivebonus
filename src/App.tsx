import { useEffect, useState } from 'react'
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
//import sf6 from './assets/sf6.jpg'

import Header from './components/header'

function App() {
  const location = useLocation()
  const arr = [bg0, bg1, bg2, bg3, bg4]

  const [bg, setBg] = useState<string>('')

useEffect(() => {
  const last = localStorage.getItem("bg");

  //filter indices
  const availableIndices = arr
    .map((_, i) => i.toString())
    .filter(i => i !== last);

  //choose new index
  const index = parseInt(
    availableIndices[Math.floor(Math.random() * availableIndices.length)],
    10
  );

  const selectedBg = arr[index];
  localStorage.setItem("bg", index.toString());

  // preload image
  const img = new Image();
  img.src = selectedBg;

  img.onload = () => {
    setBg(selectedBg); // only set when loaded
  };

}, [location.pathname]);
 // only rerun when the route changes

  useEffect(() => {
    if (bg) {
      document.body.style.backgroundImage = `url(${bg})`
      document.body.classList.add('homepage-bg')
    }
  }, [bg]) // only run this when the background is set

  return (
    <>
      <Header />
      <div className="content">
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
