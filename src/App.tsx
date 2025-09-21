import { useEffect, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { useTheme } from './ThemeContext'


import HomePage from './pages/home'
import AboutPage from './pages/about'
import StartPage from './pages/start'
import VocabPage from './pages/vocabulary'
import DefensePage from './pages/defense'
import AdvantagePage from './pages/advantage'
import NeutralPage from './pages/neutral'
import OffensePage from './pages/offense'
import CombosPage from './pages/combos'
import InterOffensePage from './pages/inter/interOffense'
import BRCPRCPage from './pages/inter/BRCPRC'
import WAPage from './pages/inter/wa'
import ComboTheoryPage from './pages/inter/comboTheory'
import KnockdownPage from './pages/inter/knockdown'
import SafejumpPage from './pages/inter/safejump'
import InterDefensePage from './pages/inter/interDefense'
import FuzzyPage from './pages/inter/fuzzy'
import OSPage from './pages/inter/os'
import RiskRewardPage from './pages/inter/riskReward'
import TensionPage from './pages/inter/tension'
import RISCPage from './pages/inter/risc'
import SpacePage from './pages/inter/space'
import ProjectilePage from './pages/inter/projectile'
import MatchupPage from './pages/inter/matchup'

//uppercase first letter for Pages

import bgHome from './assets/bgHome.jpg'
import bg0 from './assets/bg.jpg'
import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import bg4 from './assets/bg4.jpg'
import bgi1 from './assets/bgi1.jpg'
import bgi2 from './assets/bgi2.jpg'
import bgiHome from './assets/bgiHome.jpg'
//import sf6 from './assets/sf6.jpg'

import Header from './components/header'

function App() {
  const location = useLocation();
  const { theme } = useTheme()

  const [bg, setBg] = useState<string>('');
  const themeBackgrounds: Record<string, string[]> = {
    beginner: [bg0, bg1, bg2, bg3, bg4],
    intermediate: [bgi1, bgi2],
  }

  const homeBackgrounds: Record<string, string> = {
    beginner: bgHome,
    intermediate: bgiHome,
    
  }

  const arr = themeBackgrounds[theme] || themeBackgrounds['beginner']
  const homeBg = homeBackgrounds[theme] || bgHome


  useEffect(() => {
    let selectedBg = '';

    if (location.pathname === '/') {
      const img = new Image();
      img.src = homeBg;
      img.onload = () => {
        setBg(homeBg);
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
  }, [location.pathname, theme]);

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
          <Route path="/interOffense" element={<InterOffensePage />} />
          <Route path="/BRCPRC" element={<BRCPRCPage />} />
          <Route path="/wa" element={<WAPage />} />
          <Route path="/comboTheory" element={<ComboTheoryPage />} />
          <Route path="/knockdown" element={<KnockdownPage />} />
          <Route path="/safejump" element={<SafejumpPage />} />
          <Route path="/interDefense" element={<InterDefensePage />} />
          <Route path="/fuzzy" element={<FuzzyPage />} />
          <Route path="/os" element={<OSPage />} />
          <Route path="/riskReward" element={<RiskRewardPage />} />
          <Route path="/tension" element={<TensionPage />} />
          <Route path="/risc" element={<RISCPage />} />
          <Route path="/space" element={<SpacePage />} />
          <Route path="/projectile" element={<ProjectilePage />} />
          <Route path="/matchup" element={<MatchupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
