export default function Vocabulary() { return ( 
<div className='mainWrapper'>
  <div className='mainContent'>
    <h1>
      Jargon/Vocabulary 
    </h1>
    <p>(Sorry, I know it's a lot…) </p>
    <h2>Numpad notation </h2>
    
    <ul>
      <li>If you have a numpad on your keyboard you can look at that for reference at any point</li>
      <li>5 is neutral, AKA no directions are being pressed.</li>
      <li>6 is towards the opponent for combo notation purposes, since it assumes you are player 1 (on the left side, facing right)</li>
      <li>If there is no number associated with a button in notation, assume it means 5 (neutral)</li>
    </ul>
  </div>
  <div className='mainContent'>
    <h2>Button nicknames</h2>
    <ul>
      <li>Guilty Gear uses Punch, Kick, Slash, Heavy Slash, and Dust as opposed to many other anime fighting games which simply use A B C D</li>
      <li>We abbreviate these buttons for convenience</li>
      <ul>
        <li><span className="punch">P</span> = Punch</li>
        <li><span className="kick">K</span> = Kick</li>
        <li><span className="slash">S</span> = Slash</li>
        <li><span className="heavy">H</span> = Heavy Slash</li>
        <ul>
          <li>Sometimes abbreviated to HS</li>
        </ul>
        <li><span className="dust">D</span> = Dust</li>
      </ul>
      <li>Additionally, <strong>5S has two variants: close Slash and far Slash. The version of slash you get is based on proximity to the opponent. Close Slash is abbreviated to c.S and far Slash is abbreviated to f.S.</strong>
      </li>
      <li>In your training settings, change the button display type to be the moves rather than the buttons! This will help you familiarize with the universal terminology faster.</li>
    </ul>
    </div>
    <div className='mainContent'>
    <h2>Normals, Command Normals, Specials, Gatlings, and Cancels</h2>
    <ul>
      <li>
        <strong>Normals are the most fundamental and key component of your character's kit</strong>
      </li>
      <li>These are performed pressing a button when in neutral or crouching</li>
      <li>P buttons are your fastest attacks that typically cover a short range, used on defense to fight your way out of bad situations</li>
      <li>K buttons are fast, midrange, and always gatling (cancel) into 2D (down dust, universal low, also called sweep in some contexts)</li>
      <li>S and H buttons are your most important buttons at a low level of play, as they cover the best range and lead to the best damage</li>
      <li>S buttons will almost always combo into H buttons (Unless you are Happy Chaos)</li>
      <li>Command normals</li>
      <ul>
        <li>Command normals in Strive are largely limited to buttons that come out when you hold forward + attack</li>
        <li>This means that you should not be holding forward the entire time you are attacking, since you will likely get a command normal like 6H when you actually wanted 5H!</li>
      </ul>
      <li>These have good combo applications because they can combo from punches and kicks, which are relatively limited otherwise as a balancing factor to their speed.</li>
      <li>6P (forward punch) is the dedicated anti-air command normal in Strive. It is universal across all characters and makes your upper body hurtbox disappear entirely, meaning attacks that hit above your torso phase through you.</li>
      <ul>
        <li>You can go a great distance in Strive's ranked system by simply anti-airing people who jump </li>
      </ul>
      <li>Specials</li>
      <ul>
        <li>Specials are tied to a motion input and can cancel out of any normal or command normal except for 5D (neutral dust)</li>
      </ul>
      <li>The most basic combos in Strive consist of a few normals that are then cancelled into a special move. Some specials allow you to pick up the combo afterwards with more normals. Check <a target="_blank" rel="noopener noreferrer" href="https://www.dustloop.com/w/GGST">dustloop.com</a> and see your character specific combo section for more information. Don't get stuck trying to do combos! These are not very important at the most fundamental level of play! </li>
      <li>Gatlings </li>
      <ul>
        <li>Gatlings in Strive refer to the moves every attack can cancel into. Every character shares the same base gatling table, which makes learning new characters extremely easy compared to previous entries. Don't worry about this too much yet, but note that Slash normals go into Heavy Slash normals.</li>
      </ul>
      <li>Gatlings are essentially cancels for normals, but they're called something else just to fuck with you</li>
      <ul>
        <li>Thank you Daisuke</li>
      </ul>
      <li>Cancels refer to cancelling the endlag of a normal into a special. Nothing new here.</li>
    </ul>
    
  </div>
</div> ) }