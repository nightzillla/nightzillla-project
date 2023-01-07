import React from 'react'
import './Gallery.css'
import {Link} from 'react-router-dom'


function GalleryNavBar() {
  return (
    <>
        <ul className="flex justify-evenly galleryNavBar ">
            <h1 className="galleryNightzillaFont pr-12">nightzillla</h1>
            <li className="galleryHomeGalleryNavBar dark:text-gray-400">
            <Link to="/"><h4>Home</h4></Link>
            </li>
            <li className='galleryProfileNavBar dark:text-gray-400'>
            <Link to="/aboutme"><h4>Profile</h4></Link>
            </li>
            <li className='galleryCohortNavBar dark:text-gray-400'>
            <Link to="/cohort"><h4>Cohort</h4></Link>
            </li>
        </ul>
    </>
  )
}

export default GalleryNavBar