import React from "react";
import './Intro.css'; 
import '../../App.css'
import {formatText, projectImg} from '../data/Data.js'

function Intro(props) {

    const projectId = props.component.toString().trim();

    return(
        <>
        <div className="intro-container">
            <div className="intro-text">
                <h1>{ props.title }</h1>
                <div className="divider"></div>
                {
                    props.link === '' 
                    ? <></>
                    :   <div>
                            <a href={ props.link } target="_blank">
                                <button>{props.linkTitle}</button>
                            </a> 
                            <div className="divider"></div>
                        </div>
                        
                }
                <h4>{ props.dates }</h4>
                <div className="divider"></div>
                <h5>{ formatText(props.summary) }</h5>
                <div className="divider"></div>
                <h4>Responsibilities:</h4>
                <h5>{ props.responsibilities }</h5>
                <div className="divider"></div>
                <h4>Tools:</h4>
                <h5>{ formatText(props.tools) }</h5>
                <div className="divider"></div>
                {
                    props.team === '' 
                    ? <></>
                    :   <div>
                            <h4>Team:</h4>
                            <h5>{ props.team }</h5>
                        </div>
                }
            </div>
            <div className="featured-img-container">
                <img src={ projectImg(projectId) } className="intro-img"></img>
            </div>
        </div>
        <hr></hr>
        </>
    )
}

export default Intro