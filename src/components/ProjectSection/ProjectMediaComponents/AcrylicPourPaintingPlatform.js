import React from "react";
import '../ProjectSection.css';

import video from '../project-media/Acrylic Pour Painting Platform/acrylic-pour-demo.mov'
import img from '../project-media/Acrylic Pour Painting Platform/final-product.jpg'


function AcrylicPourPaintingPlatform() {
    return(
        <>
            <div className="project-media-container">
                <video width="41%" controls >
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="divider"></div>
                <img src={img} className="project-media" style={{ width: "35%" }}></img>
            </div>
        </>
    )
}

export default AcrylicPourPaintingPlatform;