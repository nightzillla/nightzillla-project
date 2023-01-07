import React from 'react'
import './Project.css'
import {Link} from 'react-router-dom'


function ProjectNavBar() {
  return (
    <>
        <ul className="flex justify-evenly justify-center ProjectNavBar ">
            <h1 className="projectNightzillaFont pr-12">nightzillla</h1>
            <li className="homeProjectNavBar dark:text-gray-400">
            <Link to="/"><h4>Home</h4></Link>
            </li>
            <li className='galleryNavBar dark:text-gray-400'>
            <Link to="/gallery"><h4>Gallery</h4></Link>
            </li>
            <li className='cohortNavBar dark:text-gray-400'>
            <Link to="/cohort"><h4>Cohort</h4></Link>
            </li>
        </ul>
    </>
  )
}

export default ProjectNavBar