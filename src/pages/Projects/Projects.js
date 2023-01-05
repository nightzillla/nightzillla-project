import React from 'react'
import './Project.css'
import ProjectNavBar from './ProjectNavBar'
import ProfileCard from './ProfileCards/ProfileCard'
import GithhubFinder from './ProfileCards/GithhubFinder'
import BrosMovies from './ProfileCards/BrosMovies'
import BrosCoffee from './ProfileCards/BrosCoffee'
import WeatherBros from './ProfileCards/WeatherBros'
import CalculatorApp from './ProfileCards/CalculatorApp'


function Projects() {
  
  return (
    <> 
      <div class="page-wrapper">
        <ProjectNavBar/>
          <div class="container">
            <ProfileCard/>
          </div> {/* END OF CONTAINER */}
          <div class= "flex justify-center grid sm:grid-cols-3 md:grid-cols-3 py-5">
            <div class="flex justify-center py-5 pr-4">
              <GithhubFinder/>
            </div> {/* END OF GithubFinder */}
            <div class="flex justify-center py-5">
              <BrosMovies/>
            </div>
            <div class="flex justify-center py-5">
              <BrosCoffee/>
            </div>
            <div class="flex justify-center py-5">
              <WeatherBros/>
            </div>
            <div class="flex justify-center py-5">
              <CalculatorApp/>
            </div>
          </div>{/* END OF GRID */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects