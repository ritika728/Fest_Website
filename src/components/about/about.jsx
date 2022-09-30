import React from 'react'
import './about.css'

const about = () => {
  return (
    <div>
        <div id="stars"></div>
        <div id="stars2"></div> 
        <div id="stars3"></div>
        <div className="about">
            <div className='ieee'>
                <h1 className='ieeeheading'>WHAT IS IEEE ?</h1>
                <div className='ieeetextblock'>
                <p className='ieeetext'>Institute of Electrical and Electronics Engineers(IEEE) is an association dedicated to advancing innovation and technological excellence for the benefit of humanity. It is the world’s largest technical professional society. It is designed to serve professionals and students involved in all aspects of the electrical,electronic and computing fields and related areas of science and technology.</p>
            </div>
            </div>
            <div className='ieeemust'>
              
            <h1 className='ieeemustheading'>ABOUT US</h1>
                <div className='ieeemusttextblock'>
                  
            <p className='ieeemusttext'>IEEE Student Branch, Mody University of Science and Technology was formed in the college in the year of 2015. Our student Branch provides opportunities to connect, meet and learn from fellow IEEE students and engage with professional IEEE members locally. Our Student Branch has been constantly growing and exploring uncharted territories at the Sub – Sectional, Regional and National Level.  The Student Branch consists of 111 members and believes in the betterment of the future of the world and in helping build a sustainable society.</p>

<div className='group_photo'>
</div>
</div>
            </div>

        </div>
    </div>
  )
}

export default about