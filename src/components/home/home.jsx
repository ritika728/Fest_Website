import React from 'react'
import './home.css'
import sample from './sample1.mp4'


const home = () => {
  return (
    <div>
      <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
        <div className='homemain'>
          
            <div className='festinfo'>
                <h1 className='name'>FEST NAME</h1>
                <p>organized by IEEE Student Branch, </p>
                <p>MODY UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
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

export default home