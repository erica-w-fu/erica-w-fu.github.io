import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Microsite/microsite.png'
import pdf from '../project-media/Microsite/micrositeProcess.pdf'

function CrossCountryCommunications() {
    return(
        <>
            <div className="divider"></div>
            <p>To see my process, click <a className="link-color" href={pdf} target="_blank">here</a>.</p>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img1} className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default CrossCountryCommunications;