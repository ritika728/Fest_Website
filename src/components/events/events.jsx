import React from 'react'
import './events.css'
import Poster from '../assests/poster.jpeg'
import Itinerary from '../assests/itinerary.jpeg'
import Opening from '../assests/opening.jpeg'
import Quiz from '../assests/quiz.jpeg'
import Website from '../assests/website.jpeg'
import Relay from '../assests/relay.jpeg'
import Ml from '../assests/ml.jpeg'
import Speaker from '../assests/speaker.jpeg'

const Events = () => {
  return (
    <div classname="main3">
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
          <p className="card_text">Sometimes it's the journey that teaches you a lot about your destination.                     ~Drake  
          <p className="card_text">With the enthralling responses last year for the annual ritual of IEEE Day, this year we’ve planned an astonishing series of events  too🌟. </p> Are you excited and onboard with us for IEEE day celebrations this year?   IEEE Student Branch, Mody University of Science and Technology along with its community partner IEEE Delhi Technological University Student Branch and IEEE Guru Tegh Bahadur Institute of Technology Student Branch bringing to you a 3 Day Fiesta of events and exposures that you’ll cherish for a lifetime💫.  We have planned for you various technical events, hands-on workshops, relay marathons, cultural evenings, and much much more☄️. </p>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Itinerary}></img></div>
        <div class="card_content">
          <h2 class="card_title">ITINERARY</h2>
          <p className="card_text">With a great excitement for the IEEE Day Celebrations, we present to you the most awaited itinerary of the 3-Day Fiesta 💫
<p className='card_text'>IEEE Student Branch Mody University of science and Technology along with its community partners IEEE DTU SB and IEEE GTBIT SB provides you with the platform to learn and  grow together this IEEE Day and connect and network with delegates from various student branches of IEEE🧑‍🎓.</p>


<h1>Event details🌟</h1>
<h3>Date: 7th- 9th October 2022</h3>
<h3>Venue: Mini Auditorium and ABB01</h3></p>
        </div>
      </div>
    </li>
    <li class="cards_item" >
      <div class="card">
        <div class="card_image"><img src={Opening}></img></div>
        <div class="card_content">
          
          <p className="card_text">"Unity is strength when there is team work and collaboration, wonderful things can be achieved."


          <p className="card_text">You all are cordially invited to the Grand Opening Ceremony of <b>IEEE Day Celebrations</b> 🌟.</p>

<p className='card_text'>IEEE Student Branch Mody University of science and Technology along with its collaborators IEEE DTU SB and IEEE GTBIT SB provides you with the platform to learn and  grow together this IEEE Day and connect and network with delegates across student branches🤝.</p>

<h1>Opening Ceremony🌟</h1>
<h3>Date: 9th October 2022</h3>
<h3>Venue: Mini Auditorium </h3></p>
        </div>
      </div>
    </li>
  </ul>
</div>
<div><a className="submit3"href={"https://bit.ly/IEEE-Day-Celebrations2022"} target={'_blank'}>REGISTER</a></div>
<div class="main2" style={{marginTop:"50px"}}>
  <ul class="cards">

    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Website}></img></div>
        <div class="card_content">
          <p className="card_text" style={{fontSize:"20px"}}>It gives us great pleasure and honor to announce the launch of our website, which will give you the most latest details on all the events of the IEEE Day Celebrations 2022 .</p> 
          <p className="card_text" style={{fontSize:"20px"}}>Check it out here : <a href={'https://bit.ly/ieeedaycelebrations '}>LINK</a></p>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Quiz}></img></div>
        <div class="card_content">
          <h2 class="card_title">ITINERARY</h2>
          <p className="card_text">IEEE Mody University of Science and Technology in collaboration with IEEE DTU and IEEE GTBIT introduces its first event for IEEE Day Celebrations’22 ,"Quiz on Debugging"  where you figure out the logics and corrections of the codes. So bring in your laptops and let’s dive in the thrilling experience of logics👩‍💻.

<h1>Event details🌟</h1>
<h3>🗓️-7th October 2022</h3>
<h3>🕰️-2:45 to 4:30 pm</h3>
<h3>Venue- ABB 01 </h3></p>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Relay}></img></div>
        <div class="card_content">
          {/* <h2 class="card_title">ITINERARY</h2> */}
          <p className="card_text">”Maine kaha tha na, team banane ke liye taakat nahi … niyat chahiye”</p>

<p>IEEE Mody University of of science and technology in collaboration with IEEE DTU along with community partner as IEEE GTBIT introduces to you Where’s the finish? , a relay marathon to lift up your sportsmanship and team spirit🏃‍♀️🏃. So bring your team and let's enjoy this thrilling event🏅.


<h1>Event details🌟</h1>
<h3>🗓️-7th October 2022</h3>
<h3>🕰️-5:00 to 6:30 pm</h3>
<h3>Venue- SOB Ground </h3></p>
        </div>
      </div>
    </li>
  
  </ul>
</div>
<div class="main2">
  <ul class="cards">

    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Ml}></img></div>
        <div class="card_content">
          <p className="card_text">“Technology is best when it brings people together.” </p>
          <p className="card_text">With the increasing attention towards the field of Machine Learning and Data Science, *IEEE DTU * brings to you an event that gives you a head start in the field of machine learning💻.
</p> 
<p>IEEE Student Branch Mody University of science and Technology along with its community partners IEEE DTU SB and IEEE GTBIT SB provides you with the platform to learn and  grow together this IEEE Day and connect and network with delegates from various student branches of IEEE💫.

<h1>Speaker details🌟</h1>
<p>🧑‍💻Chhitize Kumar
     <p>Event Coordinator and ML mentor</p>

<p>👩‍💻Nivedita Vyas</p>
      <p>IEEE SB MUST Secretary ML Mentor</p>

<p>🧑‍💻Abhinav Aggrawal</p>
     <p>Corporate Coordinator and ML Mentor</p> 
     </p>
     </p>
     
<h1>Event details🌟</h1>
<h3>Date: 7th October 2022</h3>
<h3>Time:11:30 a.m.-1:30 p.m.</h3>
<h3>Venue: Mini Auditorium</h3>


          
        </div>
      </div>
    </li>
    
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={Speaker}></img></div>
        <div class="card_content">
          <p className="card_text" style={{fontSize:"18px"}}>“Technology is best when it brings people together.” 💻</p>
          <p className="card_text" style={{fontSize:"18px"}}>IEEE Student Branch Mody University of science and Technology along with its community partners IEEE DTU SB and IEEE GTBIT SB brings to you A coder’s journey by Mr. Piyush Khandelwal.
</p> 
<p>
<h1 style={{marginTop:"50px" , marginBottom:"50px"}}>Speaker details🌟</h1>
<p>🎤Mr. Piyush Khandelwal
     <p>Director W3 grads</p>

<p> Mentor GeeksforGeeks for 2 years</p>
      <p>M.Tech in CSE from Delhi    Technological University, Delhi.</p>
     </p>
     </p>
     
<h1 style={{marginTop:"50px" , marginBottom:"50px"}}>Event details🌟</h1>
<h3>Date: 8th October 2022</h3>
<h3>Time:9:15 a.m.- 11:15 a.m.</h3>
<h3>Venue: Mini Auditorium</h3>


          
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