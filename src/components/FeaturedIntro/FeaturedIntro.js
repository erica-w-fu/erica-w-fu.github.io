import React from "react";
import './FeaturedIntro.css'; 
import '../../App.css'
import {formatText, projectImg} from '../data/Data.js'

// import ThirtyDayIntro from './media/ThirtyDayIntro.png'
// import TwentyFourIntro from './media/24Intro.png'
// import CCCIntro from './media/CCCIntro.png'

// function featuredImg(id) {
//     switch (id) {
//         case "thirty_day_adulting":
//             return ThirtyDayIntro;
//         case "twenty_four":
//             return TwentyFourIntro;
//         case "ccc":
//             return CCCIntro;
//     }
// }

function FeaturedIntro(props) {

    const projectId = props.component.toString().trim();
    console.log(props.summary);

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
                                <h6 className="featured-link">{props.linkTitle}</h6>
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
                <div className="divider"></div>
                {
                    props.team === '' 
                    ? <></>
                    :   <div>
                            <h5>Team:</h5>
                            <p>{ props.team }</p>
                        </div>
                }
            </div>
            <div className="featured-img-container">
                <img src={ projectImg(projectId) } className={ props.imgType}></img>
            </div>
        </div>
        <div className="divider"></div>
        <hr></hr>
        </>
    )
}

export default FeaturedIntro