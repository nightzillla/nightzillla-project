import React from 'react'
import './Gallery.css'
import {Link} from 'react-router-dom'


function GalleryNavBar() {
  return (
    <>
        <ul className="flex justify-evenly galleryNavBar ">
            <h1 className="hOnePortfolio pr-12">nightzillla</h1>
            <li className='flex justify-center'>
            <Link to="/" className="homeGalleryNavBar dark:text-gray-400"><h4>Home</h4></Link>
            </li>
            <li className='aboutMeNavBar hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent '>
            <Link to="/aboutme"><h4>About Me</h4></Link>
            </li>
            <li className='flex justify-center'>
            <Link to="/cohort" className="cohortNavBar hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><h4>Cohort</h4></Link>
            </li>
            <li className='flex justify-center'>
            <Link to="/projects" className="projectNavBar hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><h4>Projects</h4></Link>
            </li>
        </ul>
    </>
  )
}

export default GalleryNavBar