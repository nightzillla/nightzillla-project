import React from 'react'
import ProfileCard from './ProfileCards/ProfileCard'
import GithhubFinder from './ProfileCards/GithhubFinder'
import BrosMovies from './ProfileCards/BrosMovies'
import GalleryNavBar from '../Gallery/GalleryNavBar'

function Projects() {
  return (
    <> 
      <div class="page-wrapper">
        <GalleryNavBar/>
          <div class="container">
            <ProfileCard/>
            {/* <div class= "grid grid-cols-2 grid-flow-col gap-4"></div> */}
              <div class= "grid grid-cols-3 gap-4">
                <GithhubFinder/>
                <BrosMovies/>
                <BrosMovies/>
              </div>{/* END OF GRID ROW*/}
          </div> {/* END OF CONTAINER */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects