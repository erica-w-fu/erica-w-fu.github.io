import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Textile Work/sesame-hat.jpeg'
import img2 from '../project-media/Textile Work/embroidery-gogh-lilies.jpeg'
import img3 from '../project-media/Textile Work/weaving-back.jpeg'
import img4 from '../project-media/Textile Work/weaving-front.jpeg'


function TextileWork() {
    return(
        <>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img3} className="project-img"></img>
                </div>
                <div className="divider"></div>
                <div className="project-media">
                    <img src={img4} className="project-img"></img>
                </div>
            </div>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img1} className="project-img"></img>
                </div>
                <div className="divider"></div>
                <div className="project-media">
                    <img src={img2} className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default TextileWork;
