import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import Outrage from '../assets/outrage.png'
import Thunderseal from '../assets/thunderseal.png'

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
     
      { to: '/yeezus', label: 'yah' },
      { to: '/bejeezus', label: 'yuh' },
    ],
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
          {navLinks[theme].map(({ to, label }) => (
            <Link key={to} to={to} >
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/"><button className="themeToggle" onClick={toggleTheme}>
          Switch Theme (Current: {theme})
        </button></Link>
      </header>
    </>
  )
}
