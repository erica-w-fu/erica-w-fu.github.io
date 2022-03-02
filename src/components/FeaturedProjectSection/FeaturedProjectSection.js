import React from "react";
import './FeaturedProjectSection.css'; 
import '../../App.css'
import { makeTags, formatText } from '../data/Data.js'

import ThirtyDayDemo from '../ProjectSection/project-media/30 Day Adulting/30-day-demo.mov';
import SentenceMosaics from '../ProjectSection/ProjectMediaComponents/SentenceMosaics.js';
import cccImg from  '../ProjectSection/project-media/Cross Country Connections/ccc-mother.jpeg'

function FeaturedProjectSections(props) {

    return (
        <>
            <div className='featured-project-card'>
                <h2 className="featured-header">{ props.title }</h2>
                <div className="featured-tags">{ makeTags(props.tags) }</div>
                <p className="featured-text">{ formatText(props.summary) }</p>
            </div>
        </>
    );

}

export default FeaturedProjectSections;