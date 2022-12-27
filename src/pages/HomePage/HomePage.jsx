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
      <h1 className='welcomeHeader'>welcome to nightzilla</h1> 
      </div>
    </div>{/* END OF LOADING WRAPPER*/}
    </>
  )
}

export default HomePage