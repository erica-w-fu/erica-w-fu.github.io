import React from "react";
import { NavLink } from 'react-router-dom';

import './Intro.css'; 
import '../../App.css'
import {formatText, projectImg} from '../data/Data.js'

function Intro(props) {

    const projectId = props.component.toString().trim();

    const scrollToUX = () => {
        window.scrollTo({top: 550, behavior: 'smooth'});
    };

    return(
        <div>
            <img src={ projectImg(projectId) } className="intro-img"></img>
            <div className="intro-container row-2 body-small">
                <h1>{props.title}</h1>
                <h5>{ formatText(props.summary) }</h5>
                <div className="col">
                    <h4>Responsibilities</h4>
                    <h5>{ formatText(props.responsibilities) }</h5>
                </div>
                <div className="col">
                    <h4>Tools</h4>
                    <h5>{ formatText(props.tools) }</h5>
                </div>
                {props.team === '' 
                    ? <></>
                    :   <div className="col">
                            <h4>Team</h4>
                            <h5>{ formatText(props.team) }</h5>
                        </div>
                }
                <div className="col">
                    <h4>Timeline</h4>
                    <h5>{ props.timeline }</h5>
                </div>
            </div>
        </div>
    )
}

export default Intro