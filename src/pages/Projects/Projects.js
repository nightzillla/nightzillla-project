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
          <div class= "grid grid-cols-2 grid-flow-col gap-4">
            <GithhubFinder/>
            <BrosMovies/>
            {/* <div class="bros-Movies">
              <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bros Movies</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Bros movie is a solo project that was developed in React that lets users search up their favorite movies using the TMDb API.
                  </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <a href="https://bros-movie.firebaseapp.com/">Bros Movie</a>
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div> END OF BRO MOVIE CARD */}
          </div>{/* END OF GRID ROW*/}
        </div> {/* END OF CONTAINER */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects