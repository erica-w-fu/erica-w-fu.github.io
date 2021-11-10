import React from "react";
import '../ProjectSection.css';

import img from '../project-media/Sentence Mosaics/sentence-mosaics.png'

function SentenceMosaics() {
    return(
        <>
            <div className="project-media-container">
                <img src={img} className="project-media"></img>
            </div>
        </>
    )
}

export default SentenceMosaics;