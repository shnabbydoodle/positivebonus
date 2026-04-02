import ReactPlayer from "react-player/youtube";
export default function os() { return ( <div className='mainWrapper'>
  <div className='mainContent'>
    <h1>Option Selects</h1>
    <ul>

      <li>Option selects, abbreviated to OS, are techniques where the player inputs multiple things and the game
        “chooses” what happens based on what is possible. In a sense, fuzzy jumping is an option select since the jump
        will not come out if the player is stuck in blockstun if they blocked a strike.</li>

      <li>A common type of option select is a “hitstop OS” where certain moves only come out or do not come out
        depending on if the initial attack connects.</li>
      <ul>

        <li>For example, if Ky presses f.S 236S in rapid succession, he will only get f.S if the button whiffs since the
          animation of the entire f.S covers up the 236S input. If the f.S is blocked or hits the opponent, suddenly the
          236S input is allowed to come out since it is input during the cancel window of the f.S, which only exists
          when the normal connects.</li>

      </ul>
      <ReactPlayer url='https://www.youtube.com/watch?v=QPyVg_4lcII' controls={true} />
    </ul>
    
  </div>
</div> ) }