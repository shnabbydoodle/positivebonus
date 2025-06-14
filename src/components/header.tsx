import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import Outrage from '../assets/outrage.png'
import Thunderseal from '../assets/thunderseal.png'
import Gear from '../assets/gear.png'

import './header.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  // Define images per theme
  const headerImages = {
    beginner: Outrage,
    intermediate: Thunderseal
  
  }

  // Define nav links per theme
  const navLinks = {
    beginner: [

      { to: '/about', label: 'About' },
      { to: '/start', label: 'Getting Started' },
      { to: '/vocabulary', label: 'Vocabulary' },
      { to: '/defense', label: 'Defense' },
      { to: '/advantage', label: 'Frame Advantage' },
      { to: '/neutral', label: 'Neutral' },
      { to: '/offense', label: 'Offense' },
      { to: '/combos', label: 'Combos' },
    ],
    intermediate: [
  {
    label: 'Offense',
    children: [
      { to: '/interOffense', label: 'Advanced Offensive Theory' },
      { to: '/BRCPRC', label: 'Blue Roman Cancel' },
      { to: '/wa', label: 'Wild Assault' },
      { to: '/comboTheory', label: 'Combo Theory' },
      { to: '/knockdown', label: 'Knockdowns' },
      { to: '/safejump', label: 'Safejumps' },
    ],
  },
  {
    label: 'Defense',
    children: [
      { to: '/interDefense', label: 'Advanced Defensive Techniques' },
      { to: '/fuzzy', label: 'Fuzzy Defense' },
      { to: '/os', label: 'Option Selects' },
      
    ],
  },
  {
    label: 'Game Mechanics',
    children: [
      { to: '/riskReward', label: 'Risk/Reward' },
      { to: '/tension', label: 'Tension Pulse' },
      { to: '/risc', label: 'R.I.S.C' },
      { to: '/space', label: 'Screen Space' },
      { to: '/projectile', label: 'Projectile Priority' },
      { to: '/matchup', label: 'Matchups' },
    ],
  },
]
,
  }

  return (
    <>
      <Link to="/" className="corner-link" aria-label="Home">
        <div className="corner-text">POSITIVE</div>
      </Link>
      <header className="header">
        <div className="headerImageContainer">
          <img
            src={headerImages[theme]}
            alt={`Header image for ${theme} theme`}
            className="headerImage"
            id={theme}
          />
        </div>
        <nav>
  {Array.isArray(navLinks[theme]) &&
    navLinks[theme].map((item: any) =>
      item.children ? (
        <div className="dropdown" key={item.label}>
          <button className="dropdown-toggle">{item.label}</button>
          <div className="dropdown-menu">
            {item.children.map((child: any) => (
              <Link key={child.to} to={child.to}>
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link key={item.to} to={item.to}>
          {item.label}
        </Link>
      )
    )}
</nav>

        <Link to="/"><div className="themeToggle" onClick={toggleTheme}>
          <img src={Gear} style={{cursor:'pointer'}}/> Mode: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </div></Link>
      </header>
    </>
  )
}
