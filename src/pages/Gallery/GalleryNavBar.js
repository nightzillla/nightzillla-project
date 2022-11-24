import React from 'react'
import './Gallery.css'
import {Link} from 'react-router-dom'


function GalleryNavBar() {
  return (
    <>
        <ul className="flex justify-evenly justify-center galleryNavBar ">
            <h1 className="galleryNightzillaFont pr-12">nightzillla</h1>
            <li>
            <Link to="/" className="homeGalleryNavBar dark:text-gray-400"><h4>Home</h4></Link>
            </li>
            <li className='aboutMeNavBar dark:text-gray-400'>
            <Link to="/aboutme"><h4>About Me</h4></Link>
            </li>
            <li className='cohortNavBar dark:text-gray-400'>
            <Link to="/cohort"><h4>Cohort</h4></Link>
            </li>
            <li className="projectNavBar dark:text-gray-400">
            <Link to="/projects"><h4>Projects</h4></Link>
            </li>
        </ul>
    </>
  )
}

export default GalleryNavBar