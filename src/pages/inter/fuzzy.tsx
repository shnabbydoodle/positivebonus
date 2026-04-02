import ReactPlayer from "react-player/youtube";
export default function fuzzy() { return ( <div className='mainWrapper'>
  <div className='mainContent'>
    <h1>Fuzzy Defense</h1>
    <ul>

      <li>Most mixups don't have both of their options start their active frames at the same time. </li>
      <ul>

        <li>For example, say Ky is attacking his opponent from an airdash. Ky can go for a high-low mixup by either
          swinging on the way in with his j.S for an overhead, or allow himself to land and then go into a 2K for a low.
          These two options don't connect at the same time, and in this situation, the low option will land later than
          the overhead since Ky needs to land first.</li>
      </ul>

      <li>Seeing this, a wary defender can utilize a defensive technique known as “fuzzy blocking” where they can cover
        both options by simply timing their blocks to when they expect each attack to land.</li>
      <ul>

        <li>In the example case, the way to fuzzy block Ky's airdash high-low mixup would be to block high until the
          timing at which he would have to hit the floor, then swap to a low guard to cover the possibility of a 2K.
        </li>
      </ul>

      <li>Fuzzy blocking allows you to cover multiple offensive options at the same time, but each offensive situation
        is different so they will require different fuzzy timings. This knowledge will come from time and research.</li>

      <li>Fuzzy jumping is similar to fuzzy blocking, but is specifically for escaping strike-throw scenarios.</li>

      <li>Since there is a 5 frame throw protection window after blocking and waking up, a strong defensive option is to
        block for the first 5 frames to block any meaty options, and then jump right before the throw protection window
        ends.</li>
      <ul>

        <li>If there was a button on top of your wakeup as a meaty, you will block and the jump will not go through
          since you will be locked in blockstun.</li>

        <li>If there was a throw attempt, it would have to be delayed about 5 frames since any throws directly on top of
          your wakeup would whiff due to the throw protection window. A properly timed throw will still lose to your
          jump, since you are jumping right when throw protection ends.</li>



      </ul>
      <ReactPlayer url='https://www.youtube.com/watch?v=2s0WP-PldWU' controls={true} />

      <br></br>

      <li>Fuzzy Throw Tech is similar to fuzzy jump but rather than utilizing throw protection frames, a delayed throw
        is input to take advantage of the throw tech window.</li>

      <ReactPlayer url='https://www.youtube.com/watch?v=8j8rB3azdTA' controls={true} />

    </ul>

  </div>
</div> ) }