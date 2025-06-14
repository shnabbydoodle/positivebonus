import {useTheme} from '../ThemeContext'

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className='mainWrapper'>
    <div className='homeContent'> 
      {theme === 'beginner' && (
        <>
          <h1>Positive Bonus</h1>
          <h2>Current Mode: Beginner</h2>
          <p>This website teaches Guilty Gear Strive at all levels of play.</p>
          <h2>WIP!!</h2>
          <p>To-Do:</p>
          <ul>
            <li>in document images</li>
            <li>text formatting and highlighting</li>
          </ul>
        </>
      )}
      {theme === 'intermediate' && (
        <>
          <h1>Positive Bonus</h1>
          <h2>Current Mode: Intermediate</h2>
          <p>You ready for more?</p>
          <h2>WIP!!</h2>
          <p>To-Do:</p>
          <ul>
            <li>in document images</li>
            <li>text formatting and highlighting</li>
          </ul>
        </>
      )}
      
    </div>
    </div>
  )
}
