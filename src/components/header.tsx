import { Link } from 'react-router-dom'
import Outrage from '../assets/outrage.png'

export default function Header() {
  return (
    <header className="header">
        <div className="headerImageContainer"><img src={Outrage} alt="The Outrage MK2" className="headerImage" /></div>
        <nav>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
  )
}
