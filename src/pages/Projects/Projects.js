import React from 'react'
import GalleryNavBar from '../Gallery/GalleryNavBar'
import Danny from '../../img/Gallery/danny.jpg' 

function Projects() {
  return (
    <> 
      <div class="page-wrapper">
      <GalleryNavBar/>
        <div class="container">
          <div class="flex justify-center danny-Profile-Card">
            <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class={Danny} src={Danny}/>
              <div class="p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Danny Nguyen</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
              </div>
            </div>
          </div> {/* END OF DANNY PROFILE CARD */}
          <div class="flex grid grid-flow-row gap-4 github-Finder-Card">
            <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Github Finder</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Github Finder is a solo project that was developed in React, that uses the github API to find users' github profiles and repositories.
                </p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <a href= "https://github-finder-firebase.web.app/"> Github Finder</a>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div> {/* END OF GITHUB FINDER CARD */}
            <div class="grid grid-flow-row grid-cols-4 gap-4 ">
                <div class="columns-1 github-finder-card">
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Github Finder</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Github Finder is a solo project that was developed in React, that uses the github API to find users' github profiles and repositories.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <a href= "https://github-finder-firebase.web.app/"> Github Finder</a>
                          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                </div>{/* END OF GITHUB FINDER CARD */}
                <div class="columns-1 bro-movies-card">
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bros Movies</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bros movie is a solo project that was developed in React that lets users search up their favorite movies using the TMDb API.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       <a href="https://bros-movie.firebaseapp.com/">Bros Movie</a>
                          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
            </div>{/* END OF BRO MOVIE CARD */}
          </div> {/* END OF GRID-ROW */}
        </div> {/* END OF CONTAINER */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </>
  )
}

export default Projects