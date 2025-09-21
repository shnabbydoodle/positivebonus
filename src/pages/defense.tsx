export default function Defense() { return ( <div className='mainWrapper'>
  <div className='mainContent'>
    <h1>Defense</h1>
    <p>(Stop getting hit and dying)</p>
    <ul>
      <li>Holding back (away from the enemy) when the opponent is attacking replaces your back walk with a block</li>
      <li>
        <strong><mark>Holding down and back (diagonally down away from the enemy) puts you in a crouching guard that blocks 90% of attacks in this game. If you are scared, hold down back.</mark></strong>
      </li>
      <li>A low block guards against lows and mids, whereas a stand block guards against overheads and mids. In most 2D fighting games, lows are unreactable while overheads are telegraphed (the average Strive low is about 7 frames of startup whereas overheads are 20+)</li>
      <li>
        <strong><mark>Blocking is the singular most important mechanic to not keeling over and dying!</mark></strong>
      </li>
      <li>There are a few attacks in this game that hit <strong>overhead, </strong>which you must stand block to defend. The universal attack to hit overhead is 5D, standing dust. It is recognizable by the orange effect behind it. </li>
      <li>Throws (4D and 6D) ignore blocking, but require the opponent to be point blank.</li>
      <ul>
        <li>You can defend against throws by inputting your own throw at the same time, this is known as teching</li>
        <li>You can also jump to force the throw whiff and enter a lengthy recovery animation</li>
      </ul>
      <li>Some supers have invincibility on them, allowing you to phase through attacks and bulldoze your turn back but are almost always punishable when blocked.</li>
      <ul>
        <li>Check <a target="_blank" rel="noopener noreferrer" href="https://www.dustloop.com/w/GGST">dustloop.com</a> to see which supers have invuln frames on them </li>
      </ul>
      <li>Some characters have meterless reversals, commonly called DP (dragon punch) which have invincibility on them as well. Again, extremely punishable when blocked.</li>
      <h2>Defensive system mechanics</h2>
      <ul>
        <li>
          <strong>Yellow Roman Cancel</strong>: Costs half of your tension. Press any 3 buttons except for dust or the RC macro while blocking to activate. Sends out a shockwave that stops the opponent from attacking for a second, use this time to attack and start offense.
        </li>
        <ul>
          <li>Abbreviated to YRC</li>
        </ul>
        <li>
          <strong>Blue Burst</strong>: Costs 100% Burst meter. Press any attack button + dust while being comboed. Sends out a shockwave that sends the opponent flying away as a combo breaker.
        </li>
      </ul>
      <li>At some point, you will need to press an attack to take your “turn” back and force the opponent to be on defense. This brings us to frame advantage.</li>
    </ul>
  </div>
</div> ) }