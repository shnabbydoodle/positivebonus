import { Link } from 'react-router-dom'
import Outrage from '../assets/outrage.png'
import './header.css'

export default function Header() {
  return (
    <header className="header">
        <Link to="/" className="corner-link" aria-label="Home">
         <div className="corner-text">POSITIVE</div>
        </Link>
        <div className="headerImageContainer"><img src={Outrage} alt="The Outrage MK2" className="headerImage" /></div>
        <nav>
            <Link to="/" className="mobileHomeLink" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/start">Getting Started</Link>
            <Link to="/vocabulary">Vocabulary</Link>
            <Link to="/defense">Defense</Link>
            <Link to="/advantage">Frame Advantage</Link>
            <Link to="/neutral">Neutral</Link>
            <Link to="/offense">Offense</Link>
            <Link to="/combos">Combos</Link>
        </nav>
    </header>
  )
}
