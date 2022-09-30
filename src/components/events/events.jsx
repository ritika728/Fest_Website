import React from 'react'
import './events.css'
import Poster from '../assests/poster.jpeg'
import Itinerary from '../assests/itinerary.jpeg'

const Events = () => {
  return (
    <div>
           <div id="stars"></div>
        {/* <div id="stars2"></div>  */}
        {/* <div id="stars3"></div> */}
      <div className="events">
      <div class="main2">
  <ul class="cards">

    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Poster}></img></div>
        <div class="card_content">
          <p class="card_text">Sometimes it's the journey that teaches you a lot about your destination.                     ~Drake  
          <p className='card_text'>With the enthralling responses last year for the annual ritual of IEEE Day, this year we’ve planned an astonishing series of events  too🌟. </p> Are you excited and onboard with us for IEEE day celebrations this year?   IEEE Student Branch, Mody University of Science and Technology along with its community partner IEEE Delhi Technological University Student Branch and IEEE Guru Tegh Bahadur Institute of Technology Student Branch bringing to you a 3 Day Fiesta of events and exposures that you’ll cherish for a lifetime💫.  We have planned for you various technical events, hands-on workshops, relay marathons, cultural evenings, and much much more☄️. </p>
          <button class="btn card_btn"><a href={"https://bit.ly/IEEE-Day-Celebrations2022"}></a>REGISTER HERE</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Itinerary}></img></div>
        <div class="card_content">
          <h2 class="card_title">ITINERARY</h2>
          <p class="card_text">With a great excitement for the IEEE Day Celebrations, we present to you the most awaited itinerary of the 3-Day Fiesta 💫
<p className='card_text'>IEEE Student Branch Mody University of science and Technology along with its community partners IEEE DTU SB and IEEE GTBIT SB provides you with the platform to learn and  grow together this IEEE Day and connect and network with delegates from various student branches of IEEE🧑‍🎓.</p>


<h1>Event details🌟</h1>
<h3>Date: 7th- 9th October 2022</h3>
<h3>Venue: Mini Auditorium and ABB01</h3></p>
<button class="btn card_btn"><a href={"https://bit.ly/IEEE-Day-Celebrations2022"}></a>REGISTER HERE</button>
        </div>
      </div>
    </li>
  </ul>
</div>
      </div>
    </div>
  )
}

export default Events