import React from 'react'
import Danny from '../../../img/Gallery/danny.jpg'
import {FaLinkedin} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

function ProfileCard() {
  return (
    <>
        <div className="flex justify-center py-10 pl-15 danny-Profile-Card">
            <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class={"Danny rounded-lg"} src={Danny}/>
                <div class="p-6">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Danny Nguyen</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  I am a dedicated Software Developer and Army Veteran with a love for coding, teamwork, and creative thinking. 
                  </p>
                  <div className="flex">
                    <a href="https://www.linkedin.com/in/danny-nguyen-nightzillla/">
                      <FaLinkedin className="text-3xl text-gray-400 hover:bg-white"/>
                    </a>
                    <a href="https://github.com/nightzillla">
                      <FaGithubSquare className="text-3xl text-gray-400 hover:bg-white"/>
                    </a>
                  </div>
                </div>
            </div>
        </div> {/* END OF DANNY PROFILE CARD */}
    </>
  )
}


export default ProfileCard