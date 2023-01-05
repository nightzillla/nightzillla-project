import React from 'react'
import Danny from '../../../img/Gallery/danny.jpg'
import abstractBackground from '../../../img/Wallpaper/abstract-background.jpg'
import {FaLinkedin} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

function ProfileCard() {
  return (
    <>
    <div className="abstractBackground">
      <img src={abstractBackground} className="abstractImg"/>
      </div>
        <div className="flex justify-center py-10 danny-Profile-Card">
          <div class="rounded-lg shadow-lg bg-white max-w-sm shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className={"Danny rounded-lg "} src={Danny}/>
              <div className="p-6">
                <h5 id="dannyNguyen" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Danny Nguyen</h5>Full Stack Developer
                <p id="bio"className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I am a dedicated Software Developer with a passion for photography love for coding, teamwork, and creative thinking.  fsdfsdfsdfafa
                dfsdfsdfsdf
                </p>
                <div className="flex">
                  <a a target="_blank" href="https://www.linkedin.com/in/danny-nguyen-nightzillla/">
                    <FaLinkedin className="text-3xl text-gray-400 hover:bg-white mr-[.5rem]"/>
                  </a>
                  <a a target="_blank" href="https://github.com/nightzillla">
                    <FaGithubSquare className="text-3xl text-gray-400 hover:bg-white"/>
                  </a>
                </div> 
            </div>
          </div>{/* END OF CARD*/}
        </div> {/* END OF DANNY PROFILE CARD */}
    </>
  )
}


export default ProfileCard