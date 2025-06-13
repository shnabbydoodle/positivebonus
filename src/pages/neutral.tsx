import ReactPlayer from "react-player/youtube";

export default function Neutral() { return ( <div className='mainWrapper'>
  <div className='mainContent'>
    <h1>Neutral</h1>
    <p>Neither player is actively blocking </p>
    <ul>
      <li>You should probably be dashing around the place and not walking. Use your dash macro, or double tap forward quickly when grounded to run.</li>
      <li>There is a rock paper scissors interaction when both players are fishing for a hit</li>
      <ul>
        <li>Sashi-kaeshi (passively waiting) &gt; Oki-waza (preempting your opponent) &gt; Ate-waza (establishing your offense)</li>
      </ul>
      <li>Passive play means you are not committing to any attacks and simply reacting to the opponent's approach options with the correct response (such as anti-airing jumps with 6P, poking run-ins with S and 2S, etc.</li>
      <li>This loses to a player establishing their offense in a calculated manner. A passive player is operating on a delay since they need to react to the opponent, so establishing offense by running and doing a far reaching button will often strike first before the passive player can react.</li>
      <li>Preemptively swinging beats somebody trying to establish their offense in a calculated manner. They will simply run into your giant button and get hit.</li>
      <li>Passively waiting for somebody to swing their giant button will beat it, since their preemptive strike often assumes you will close the gap first. Therefore, it will whiff and you can react to it missing you and run up and counterattack.</li>
      <li>At a very low level, people will be flailing in neutral (preemptively swinging). Therefore, passive play beats a lot of low level players since you can just wait for them to do something stupid and then counterattack.</li>
      <li>
        <strong>WATCH THIS VIDEO!!</strong>
        <ReactPlayer url='https://www.youtube.com/watch?v=tjmnNbG0HAw' controls={true}/>
      </li>
      <li>Neutral is a relatively complicated topic to distill into simple terms and the rapidly changing nature of every neutral interaction doesn't make it any easier to learn. However, do try to think about the rock-paper-scissors when you are playing since it will help you comprehend what you are looking at.</li>
    </ul>
  </div>
</div> ) }