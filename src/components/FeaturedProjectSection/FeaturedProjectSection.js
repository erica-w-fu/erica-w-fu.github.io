import React from "react";
import './FeaturedProjectSection.css'; 
import '../../App.css'

import ThirtyDayDemo from '../ProjectSection/project-media/30 Day Adulting/30-day-demo.mov';
import SentenceMosaics from '../ProjectSection/ProjectMediaComponents/SentenceMosaics.js';
import cccImg from  '../ProjectSection/project-media/Cross Country Connections/ccc-mother.jpeg'

// funciton to create purple tags
function makeTags(str) {
    if (!str) return str;

    const tags = str.split(",");
    const final = []

    for (let tag of tags) {
        final.push(
            <div className="featured-tag">
                <b>{ tag }</b>
            </div>
        ) 
    }

    return final;
}

// function to format a string to include newlines
function formatText(str) {
    if (!str) return str;

    // replace \n in the string with <br />
    let formatted = [];
    const lines = str.split("\\n");

    for (let line of lines) {
        formatted.push(line);
        formatted.push(<br />);

    }
    return formatted;
}


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