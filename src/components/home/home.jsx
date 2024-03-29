import React from 'react'
import './home.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../assests/newlogo.png'


const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-10-7`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  
 
const navigate=useNavigate();
  return (
    
    
      <div className="homepage">
        
        <div id="stars"></div>
        <div id="stars2"></div> 
        <div id="stars3"></div>
        <div className='homemain'>
          <div>
            <img  className='newlogo' src={Logo} alt="" ></img>
          </div>
            <div className='festinfo' id='title'>
              <div className='image'></div>
                 <span className="heading">IEEE DAY CELEBRATIONS 2022</span> <br/>
                {/* <span >TAGLINE </span><br/> */}
                <br/>
                <span className="dates">07/10/2022-09/10/2022</span>
                <div className='buttons'>
            <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/about");}} type='submit'className="submit">ABOUT</button>
            <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/events");}} type='submit'className="submit">EVENTS</button>
             <button onClick={()=>{
            window.scrollTo(0,0);
            // navigate("/about");}} type='schedule'className="submit">SCHEDULE</button>
            // <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/contact");}} type='submit'className="submit">CONTACT</button>    
            </div>
            <div className='timer'>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <div><a className="submit2"href={"https://bit.ly/IEEE-Day-Celebrations2022"} target={'_blank'}>REGISTER</a></div>
            </div>
            
          
            </div>
            
        </div>
  )
}

export default Home