import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Communication Design Fundamentals/gestalt-1.png'
import img2 from '../project-media/Communication Design Fundamentals/gestalt-2.png'

function CommunicationDesign() {
    return(
        <>
            <div className="divider"></div>
            <h4>Practicing Form and Composition</h4>
            <div className="divider"></div>
            <p>Created for my Communication Design Fundamentals course, I used squares while considering negative space to convey different emotions.</p>
            <p>To see my process, click <a className="link-color underline" href="https://medium.com/@efu_51933/project-2-form-composition-9dcb50da3ac8" target="_blank">here</a>.</p> 
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

export default CommunicationDesign;