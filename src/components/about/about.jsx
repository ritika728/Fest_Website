import React from 'react'
import './about.css'
import Team from '../assests/team.jpeg'
import Day from '../assests/day.png'

const about = () => {
  return (
    <div>
        <div id="stars"></div>
        {/* <div id="stars2"></div>  */}
        {/* <div id="stars3"></div> */}
        <div className="about">
            <div className='ieee'>
                <h1 className='ieeeheading'>WHAT IS IEEE ?</h1>
                <div className='ieeetextblock'>
                <p className='ieeetext'>Institute of Electrical and Electronics Engineers(IEEE) is an association dedicated to advancing innovation and technological excellence for the benefit of humanity.  </p>
            </div>
            </div>
            <div className='ieeemust'>
              
            <h1 className='ieeemustheading'>ABOUT US</h1>
                <div className='ieeemusttextblock'>
                  
            <p className='ieeemusttext'>IEEE Student Branch, Mody University of Science and Technology was formed in the college in the year of 2015.The Student Branch consists of 111 members and believes in the betterment of the future of the world and in helping build a sustainable society.</p>

<div > <img className='group_photo' src={Team} alt="image" ></img></div>
</div>
            </div>
            <div className='ieeemust'>
              
              <h1 className='ieeemustheading'>IEEE DAY 2022</h1>
                  <div className='ieeemusttextblock'>
                    
              <p className='ieeedaytext'>IEEE Day worldwide celebrations demonstrate the ways thousands of IEEE members in local communities join together to collaborate on ideas that leverage technology for a better tomorrow.</p>
              <div > <img className='group_photo2' src={Day} alt="image" ></img></div>
  </div>
              </div>



        </div>
    </div>
  )
}

export default about