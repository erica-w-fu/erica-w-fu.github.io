import React from 'react'
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import './ProjectNav.css';

function ProjectNav() {

    return (
        <>
            <Link to='/erica-w-fu'>
                <h4><b>Featured Projects</b></h4>
            </Link>
            <div className="divider"></div>
            <div className='project-nav-container'>
                <Link to='/erica-w-fu/ThirtyDayAdulting' className='project-tab'>
                </Link>
                <Link to='/erica-w-fu/TwentyFour' className='project-tab'>
                </Link>
                <Link to='/erica-w-fu/CrossCountryConnections' className='project-tab'>
                </Link>
            </div>
            <div className="social-icons-home">
                  <a 
                      className="social-icon-link linkedIn"
                      target='_blank'
                      href='https://www.linkedin.com/in/erica-fu-15b3a61b9/'
                  >
                      <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                      className="social-icon-link github"
                      target='_blank'
                      href='https://github.com/erica-w-fu'
                  >
                      <i className="fab fa-github"></i>
                  </a>
                  <a 
                      className="social-icon-link instagram"
                      target='_blank'
                      href='https://www.instagram.com/ericacreatesss/'
                  >
                      <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <small>Made with React, 2021</small>
        </>
    )
}

export default ProjectNav;