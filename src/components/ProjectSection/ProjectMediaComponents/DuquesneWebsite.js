import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Duquesne Website/duquesne-site.png'

function DuquesneWebsite() {
    return(
        <>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img1} className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default DuquesneWebsite;