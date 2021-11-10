import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Bit Logo/stationary-mockup.png'
import img2 from '../project-media/Bit Logo/building-mockup.png'
import pdf from '../project-media/Bit Logo/BitGroupBrandDesign.pdf'

function BitLogo() {
    return(
        <>
            <div className="divider"></div>
            <p>To see my other designs and process, click <a className="link-color" href={pdf} target="_blank">here</a>.</p>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img1} className="project-img"></img>
                </div>
            </div>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img2} className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default BitLogo;