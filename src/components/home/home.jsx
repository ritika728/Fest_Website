import React from 'react'
import './home.css'
import { useEffect, useState } from "react";
import sample from './sample1.mp4'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-11-1`) - +new Date();
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
    <div>
      <video className='videoTag' autoPlay loop muted>
         <source src={sample} type='video/mp4' />
      </video>
      
        <div className='homemain'>
          <div className='left'>
            <div className='festinfo'>
                <h1 className='name'>FEST NAME</h1>
                <h5>TAGLINE </h5>
                <p>03/09/2022 - 06/09/2022</p>
            </div>
            <div className='buttons'>
            <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/about");}} type='submit'className="submit">ABOUT</button>
            <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/events");}} type='submit'className="submit">EVENTS</button>
             <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/about");}} type='schedule'className="submit">SCHEDULE</button>
            <button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/contact");}} type='submit'className="submit">CONTACT</button>    
            </div>
            <div className='timer'>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
            </div>
            <div className='cards'>
              <div className='card1'>
                <img src="" alt="" />
              </div>
              <div className='card2'>
                <img src="" alt="" />
              </div>
              <div className='card3'>
                <img src="" alt="" />
              </div>
              <div className='card4'>
                <img src="" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home