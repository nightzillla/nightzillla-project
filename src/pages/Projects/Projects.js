import React from 'react'

function Projects() {
  return (
    <div>Projects 
      <div class="page-wrapper">
        <div class="container">
            <div class="row">
                <div class="col github-finder-card">
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
                  <a href="https://bros-movie.firebaseapp.com/">Bro Movie</a>
                </div>{/* END OF GITHUB FINDER CARD */}
            </div> {/* END OF ROW */}
        </div> {/* END OF CONTAINER */}
      </div> {/* END OF PAGE-WRAPPER */}  
    </div>
  )
}

export default Projects