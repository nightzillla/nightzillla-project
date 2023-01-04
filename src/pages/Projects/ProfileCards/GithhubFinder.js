import React from 'react'
import '../Project.css'
import {FaPlay} from 'react-icons/fa'

function GithhubFinder() {

  return (
    <>
      <div class="github-Finder-Card pl-4">
        <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6">
            <h5 id="githubFinder" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Github Finder</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Github Finder is a solo project that was developed in React, that uses the github API to find users github profiles and repositories.
            </p>
              <a target="_blank" href= "https://github-finder-firebase.web.app/"><FaPlay className="text-3xl text-gray-400 hover:bg-white mr-[.5rem]"/></a>
          </div>
        </div>{/* END OF PROFILE CARD*/}
      </div> {/* END OF GITHUB FINDER CARD */}
    </>
  )
}

export default GithhubFinder