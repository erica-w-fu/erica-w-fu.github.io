import React from 'react'
import { NavLink } from 'react-router-dom';
import './ProjectNav.css';

import twentyFour from './24Navbar.png'
import adulting from './AdultingNavbar.png'
import ccc from './CCCNavbar.png'

function ProjectNav() {

    const scrollToTop = () => {
		window.scrollTo({top: 155});
	};


    return (
        <>
            <NavLink to='/'>
                <h4><b>Featured Projects</b></h4>
            </NavLink>
            <div className='project-nav-container'>
                <NavLink to='/ThirtyDayAdulting' className={(navData) => (navData.isActive ? "active-project" : 'project-tab')} onClick={scrollToTop}>
                    <img src={adulting} className='tab-img'></img>
                </NavLink>
                <NavLink to='/TwentyFour' className={(navData) => (navData.isActive ? "active-project" : 'project-tab')} onClick={scrollToTop}>
                    <img src={twentyFour} className='tab-img'></img>
                </NavLink>
                <NavLink to='/CrossCountryConnections' className={(navData) => (navData.isActive ? "active-project" : 'project-tab')} onClick={scrollToTop}>
                    <img src={ccc} className='tab-img'></img>
                </NavLink>
            </div>
            <NavLink to='/Projects' target="none">
                <div className="more-projects">
                    <p><b>See all projects</b></p>
                </div>
            </NavLink>
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