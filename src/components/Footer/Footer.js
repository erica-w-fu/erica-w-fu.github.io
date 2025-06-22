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
        window.scrollTo({top: 500, behavior: 'smooth'});
    };

    return (
        <div className="bordered-section" style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "8px 32px"}}>
            <p>Made with React and &#x2764;, 2025</p>
            <div className="horizontal-flex">
                <Socials/>
            </div>
        </div>
    )
}

export default Footer
