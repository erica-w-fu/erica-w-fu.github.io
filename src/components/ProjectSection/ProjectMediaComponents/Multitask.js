import React from "react";
import '../ProjectSection.css';

import video from '../project-media/Multitask/30-day-demo.mov'

function Multitask() {
    return(
        <>
            <div className="project-media-container">
                <video width="35%"  controls >
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </>
    )
}

export default Multitask;