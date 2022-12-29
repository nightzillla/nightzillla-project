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
      </div>{/* END OF VIDEO CONTAINER*/}
      <div className="menuContent">
      <NavBar/>
      </div>
      <h1 className='welcomeHeader'>Nightzillla website coming soon!</h1> 
    </div>{/* END OF LOADING WRAPPER*/}
    </>
  )
}

export default HomePage