import React, {useState} from 'react';
import '../../App.css';
import './ProjectCard.css';


function ProjectCard({logo, logoHover, title, tagsMain, tagsSecondary, CTA}) {
    
    const [hovered, setHovered] = useState(false);

    return (
        <div className="project-card-container">  
            <a 
                id="project-card"
                className="bordered-section flex-item" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={hovered ? logoHover : logo}
                    className="logo" 
                    alt={`${title} logo`}
                />    
                <div style={{gap: '4px'}}>
                    <small className="caption subdued">
                        {tagsMain}
                    </small>
                    <small className="caption subdued tags-secondary">
                        {tagsSecondary}
                    </small>
                </div>            
            </a>
            <div class="project-card-tilt-background">
                <small style={{position: 'absolute', bottom: '8px', right: '8px', margin: '0'}}>{CTA}</small>
            </div>
        </div>
    );
}

export default ProjectCard;