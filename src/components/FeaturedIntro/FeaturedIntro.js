import React from "react";
import './FeaturedIntro.css'; 
import '../../App.css'

import ThirtyDayIntro from './media/ThirtyDayIntro.png'
import TwentyFourIntro from './media/24Intro.png'
import CCCIntro from './media/CCCIntro.png'

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

function featuredImg(id) {
    switch (id) {
        case "thirty_day_adulting":
            return ThirtyDayIntro;
        case "twenty_four":
            return TwentyFourIntro;
        case "ccc":
            return CCCIntro;
    }
}

function FeaturedIntro(props) {

    const projectId = props.img.toString().trim();

    return(
        <>
        <div className="featured-intro-container">
            <div className="featured-intro-text">
                <h2>{ props.title }</h2>
                <div className="divider"></div>
                {
                    props.link === '' 
                    ? <></>
                    :   <div>
                            <a href={ props.link } target="_blank">
                                <h6 className="featured-link">Visit Website</h6>
                            </a> 
                            <div className="divider"></div>
                        </div>
                        
                }
                <h5>{ props.date }</h5>
                <div className="divider"></div>
                <p>{ formatText(props.summary) }</p>
                <div className="divider"></div>
                <h5>Responsibilities:</h5>
                <p>{ props.responsibilities }</p>
                <div className="divider"></div>
                <h5>Tools:</h5>
                <p>{ formatText(props.tools) }</p>
            </div>
            <div className="featured-img-container">
                <img src={ featuredImg(projectId) } className={ props.imgType}></img>
            </div>
        </div>
        <div className="divider"></div>
        <hr></hr>
        </>
    )
}

export default FeaturedIntro