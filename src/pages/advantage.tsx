export default function Advantage() { return ( <div className='mainWrapper'>
  <div className='mainContent'>
    <h1>Frame advantage</h1>
    <p>“Plus” and “Minus” frames </p>
    <ul>
      <li>This is important and applies to all fighting games</li>
      </ul>
      <ol>
      <li>When you attack, you do an animation</li>
      <li>When the attack connects, the defending player also does an animation (either one where they block or get hit)</li>
      <li>Frame advantage is the difference in animation endlag between the attacker's attack animation and the defender's block animation, and hence who can leave the animation first and perform another action.</li>
      <li>If a move is -10 when blocked, the defender can then press a button with 10 frames or less of startup and the attacker will be unable to block it since they are still locked in their endlag</li>
      <li>If the attacker does a move that is -2 on block and both players press a 5 frame startup normal at their first actionable frame, the defender will attack first by 2 frames (the attacker will be in their third frame of startup before getting interrupted)</li>
      </ol>
      <ul>
      <li>You can get a feel for which moves are minus based on how statistically successful you can counterattack after blocking them. You'll get a feel for it. Alternatively, <a href="dustloop.com">dustloop.com</a> lists all attack frame advantages. </li>
      <li>Frame advantage is most important on special moves since almost all block strings (sequence of attacks done against a blocking opponent) end with a special.</li>
     </ul>
  </div>
</div> ) }