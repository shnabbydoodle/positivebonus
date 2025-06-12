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

import bgHome from './assets/bgHome.jpg'
import bg0 from './assets/bg.jpg'
import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import bg4 from './assets/bg4.jpg'
import bgi1 from './assets/bgi1.jpg'
import bgi2 from './assets/bgi2.jpg'
import bgi3 from './assets/bgi3.jpg'
//import sf6 from './assets/sf6.jpg'

import Header from './components/header'

function App() {
  const location = useLocation();
  let arr = [bg0, bg1, bg2, bg3, bg4];
  const [bg, setBg] = useState<string>('');
  const intermediatearr = [bgi1,bgi2,bgi3];
if(document.getElementById('intermediate')){
  arr = intermediatearr
}
  useEffect(() => {
    let selectedBg = '';

    if (location.pathname === '/') {
      const img = new Image();
      img.src = bgHome;
      img.onload = () => {
        setBg(bgHome);
      };
    } else {
      const last = localStorage.getItem("bg");

      const availableIndices = arr
        .map((_, i) => i.toString())
        .filter(i => i !== last); // filter last one from pool

        //choose new bg
      const index = parseInt(
        availableIndices[Math.floor(Math.random() * availableIndices.length)],
        10
      );

      selectedBg = arr[index];
      localStorage.setItem("bg", index.toString());

      const img = new Image();
      img.src = selectedBg;

      img.onload = () => {
        setBg(selectedBg);
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    if (bg) {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.classList.add('homepage-bg');
    }
  }, [bg]);

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
  );
}

export default App
