import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

import Socials from '../Socials/Socials.js'
// import UXProjects from '../UXProjects/UXProjects.js'

function Footer() {

    const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

    const scrollToUX = () => {
        window.scrollTo({top: 550, behavior: 'smooth'});
    };

    return (
        <div>
        <div className='footer-background'>
            <div className='footer-container body'>
                <div className='footer-left'>
                    <p>Interested in seeing more?</p>
                    <br></br>
                    <p>
                        Check out my&nbsp; 
                        <NavLink to='/' 
                            onClick={scrollToUX}
                        >
                            UX design projects.
                        </NavLink>
                    </p>
                    <p>
                        Check out my&nbsp; 
                        <NavLink to='/Developer' 
                            onClick={scrollToTop}
                        >
                            front-end/full stack development projects.
                        </NavLink>
                    </p>
                </div>
                <div className='footer-right'>
                    <p>Made with React, 2021</p>
                    <Socials/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
