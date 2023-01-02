import React from 'react'
import '../Project.css'

function GithhubFinder() {

  return (
    <>
      <div class="github-Finder-Card pl-4">
        <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Github Finder</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Github Finder is a solo project that was developed in React, that uses the github API to find users' github profiles and repositories.
            </p>
            <div href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <a target="_blank" href= "https://github-finder-firebase.web.app/"> Github Finder</a>
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>{/* END OF PROFILE CARD*/}
      </div> {/* END OF GITHUB FINDER CARD */}
    </>
  )
}

export default GithhubFinder