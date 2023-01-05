import React from 'react'
import './Project.css'
import ProjectNavBar from './ProjectNavBar'
import ProfileCard from './ProfileCards/ProfileCard'
import GithhubFinder from './ProfileCards/GithhubFinder'
import BrosMovies from './ProfileCards/BrosMovies'
import BrosCoffee from './ProfileCards/BrosCoffee'
import WeatherBros from './ProfileCards/WeatherBros'
import CalculatorApp from './ProfileCards/CalculatorApp'
import TravelBros from './ProfileCards/TravelBros'


function Projects() {
  
  return (
    <> 
      <div className="page-wrapper">
        <ProjectNavBar/>
          <div className="container">
            <ProfileCard/>
          </div> {/* END OF CONTAINER */}
          <div className= "flex justify-center grid sm:grid-cols-3 md:grid-cols-3 py-5">
          <div className="flex justify-center py-5 pr-4">
              <TravelBros/>
            </div> {/* END OF GithubFinder */}
            <div className="flex justify-center py-5 pr-4">
              <GithhubFinder/>
            </div> {/* END OF GithubFinder */}
            <div className="flex justify-center py-5">
              <BrosMovies/>
            </div>
            <div className="flex justify-center py-5">
              <BrosCoffee/>
            </div>
            <div className="flex justify-center py-5">
              <WeatherBros/>
            </div>
            <div className="flex justify-center py-5">
              <CalculatorApp/>
            </div>
          </div>{/* END OF GRID */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects