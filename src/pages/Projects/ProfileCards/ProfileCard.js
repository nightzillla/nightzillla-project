import React from 'react'
import Danny from '../../../img/Gallery/danny.jpg' 

function ProfileCard() {
  return (
    <>
        <div class="flex justify-center py-10 pl-15 danny-Profile-Card">
            <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class={"Danny rounded-lg"} src={Danny}/>
                <div class="p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Danny Nguyen</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I am a dedicated Software Developer and Army Veteran with a love for coding, teamwork, and creative thinking. 
                </p>
                <div>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <a href="https://www.linkedin.com/in/danny-nguyen-nightzillla/">Linkedin</a>
                  </a>
                </div>
                  <a href="#" class="inline-flex items-center pl-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <a href="https://www.linkedin.com/in/danny-nguyen-nightzillla/">Github</a>
                  </a>
                </div>
            </div>
        </div> {/* END OF DANNY PROFILE CARD */}
    </>
  )
}


export default ProfileCard