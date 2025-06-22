import React, {useState} from 'react';
import '../../App.css';
import './ProjectCard.css';
import CustomCursor from '../CustomCursor/CustomCursor.js';


import { NavLink } from 'react-router-dom';

import PopUp from '../PopUp/PopUp'

import gif from '../../media/peek.gif'
import catPeek from '../../media/peek.png'
import Fade from 'react-reveal/Fade';


function ProjectCard({logo, logoHover, title, tags, CTA}) {
    
    const [hovered, setHovered] = useState(false);

    return (
        <div className="project-card-container">  
            <a 
                id="project-card"
                className="bordered-section flex-item" 
                style={{
                    // backgroundImage: hovered ? `url(${imgHover})` : 'none',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // color: hovered ? `var(--white)` : `var(--black)`
                    // transform: hovered ? `perspective(1000px) rotateX(5deg) rotateY(10deg);` : 'none'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <div>
                    <img
                        src={hovered ? logoHover : logo}
                        className="logo" 
                        alt={`${title} logo`}
                    />
                    <h3>{title}</h3>
                    {/* <h3>{description}</h3> */}
                </div>
                <p>
                    {tags.map((tag, i) => (
                        <React.Fragment key={i}>
                        {tag}
                        <br />
                        </React.Fragment>
                    ))}
                </p>
            </a>
            {/* <CustomCursor /> */}
            <div class="project-card-tilt-background">
                <p style={{position: 'absolute', bottom: '8px', right: '8px', margin: '0'}}>{CTA}</p>
            </div>
        </div>
    );
}

export default ProjectCard;