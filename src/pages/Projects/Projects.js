import React from 'react'
import './Project.css'
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
            {/* <div class= "flex justify-center grid grid-cols-6 xs:grid-cols-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4"> */}
            {/* <div class= "grid grid-cols-2 grid-flow-col gap-4"></div> */}
          </div> {/* END OF CONTAINER */}
          <div class= "grid sm:grid-cols-3 md:grid-cols-3 py-5">
            <div class="flex justify-center py-5 pr-4">
              <GithhubFinder/>
            </div> {/* END OF GithubFinder */}
            <div class="flex justify-center py-5 pr-2">
              <BrosMovies/>
            </div>
            <div class="flex justify-center py-5 pr-2">
              <BrosMovies/>
            </div>
          </div>{/* END OF GRID */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects