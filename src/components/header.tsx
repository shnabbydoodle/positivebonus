import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
