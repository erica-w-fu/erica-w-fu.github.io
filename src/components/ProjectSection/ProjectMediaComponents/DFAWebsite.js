import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/DFA Website/dfa-website.png'

function DFAWebsite() {
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

export default DFAWebsite;