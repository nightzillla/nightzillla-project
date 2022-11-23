import React from 'react'
import Smoke from '../../video/smoke.mp4'
import './HomePage.css'

function HomePage() {
  return (
    <>
    <div className='loading-wrapper'>
        <div className="video-container">
            <video autoPlay muted loop className="smoke">
                <source src={Smoke}/>
            </video>
            <div className="welcomeHeader">
            <h1 className="welcomeFont">nightzillla website coming soon!</h1>
        </div>
        </div>    
    </div>
    </>
  )
}

export default HomePage