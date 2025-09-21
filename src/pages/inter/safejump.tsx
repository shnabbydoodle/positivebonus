import ReactPlayer from "react-player/youtube";
export default function safejump() { return ( <div className='mainWrapper'>
  <div className='mainContent'>

<h1>Safejumps</h1>


<ul>

<li>A safejump is a meaty jump-in attack that recovers in time to block invincible reversal options. This makes them extremely potent since it heavily incentivizes the opponent to block on wakeup, and are usually done when possible.</li>

<li>How is this possible? How can an attack both cover a wakeup but also not get hit by a reversal option? The only reason this is possible is because all attacks have startup frames, and the safejump simply recovers faster than the fastest a reversal can start.</li> 
<ul>
 
<li>The fastest reversals in this game have 9 frames of startup, so if an attack can be active on the wakeup frame but also recover within the startup window, it can function as a safejump with the right setup.</li>
 
<li>The major exception to this rule is that parries that have no startup will absorb the active frame and activate. Currently, only Baiken’s special Hiiragi and Anji’s super Kachoufuugetsu Kai have this.</li> 
</ul>

<li>Rarely, a safejump setup is done with a grounded normal such as Ky 5K and is instead called a safejab.</li>

<ReactPlayer url='https://www.youtube.com/watch?v=L_JMUqDlKWY' controls={true}/>
</ul>
  </div>
</div> ) }