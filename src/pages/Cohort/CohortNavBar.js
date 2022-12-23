import React from 'react'
import {useState} from 'react'
import pngwing from '../../img/Icons/pngwing.png'
import {Link} from 'react-router-dom'


function NavBar() {

    const [click, setClick] = useState(false);
    
    const handlerChange = (e) => {
        
        setClick((preState)=> !preState)
    
    }
    
      return (
        <div className="section2">
            <div data-dropdown="parent" className={click ? ("dropdown-parent show") : ("dropdown-parent")}>
                <div data-dropdown="toggle" className="dropdown-toggle">
                    <div className="hamburgerIconWrapperCohortNavBar">
                        <img className="hamburger"onClick={handlerChange} src={pngwing} />
                    </div>
                </div>
                <div className="dn-dropdown-menu">
                <Link className='text-link'to="/"><h3 className="homeTextCohort">Home</h3></Link>
                <Link className='text-link'to="/aboutme"><h3 className="aboutMeTextCohort">Profile</h3></Link>
                <Link className='text-link'to="/gallery"><h3 className="galleryTextCohort">Gallery</h3></Link>
                {/* <Link className='text-link'to="/projects"><h3 className="projectsTextCohort">Projects</h3></Link> */}
                </div>
            </div>
        </div>
      )
    }
export default NavBar