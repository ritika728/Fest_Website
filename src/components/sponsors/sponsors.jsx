import React from 'react'
import './sponsors.css'
import Once from '../assests/oncemore.jpg'
import Sharma from '../assests/sharma.jpg'
import Happy from '../assests/happy.jpg'

const sponsors = () => {
  return (
    <div>
       <div id="stars"></div> 
       <div >
        <h1 className='title_sponsors'>SPONSORS</h1>
        </div>
       <div className='sponsorss'>
        <div className='main7'>
        <h1 className='heading5'>HAPPY MOMOS</h1>
        <img className='sponsor' src={Happy} alt="once more" />
        </div>
        <div className='main7'>
        <h1 className='heading5'>SHARMA TREAT</h1>
        <img className='sponsor' src={Sharma} alt="once more" /> 
        </div>
        <div className='main7'>
          <h1 className='heading5'>ONCE MORE</h1>
           <img className='sponsor' src={Once} alt="once more" />
        </div>
    
       </div>
    </div>
  )
}

export default sponsors