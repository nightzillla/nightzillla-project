import React from 'react'
import Smoke from '../../video/smoke.mp4'
import './HomePage.css'
import NavBar from '../../components/NavBar'

function HomePage() {
  return (
    <>
    <div className="loading-wrapper">
      <div className="video-container">
        <video autoPlay muted loop className="smoke">
          <source src={Smoke}/>
        </video>
      </div>
      </div>
      <div>
      </div>
      <div className="section">
      <NavBar/>
        <h1 className='welcomeHeader'>welcome to nightzillla</h1> 
    </div>
    </>
  )
}

export default HomePage