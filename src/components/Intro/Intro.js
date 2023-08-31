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
            <div className="intro-container body-small">
                <h1>{props.title}</h1>
                <h5>{ formatText(props.summary) }</h5>
                <div className="row-2">
                    <div className="col">
                        <h4>Responsibilities</h4>
                        <p>{ formatText(props.responsibilities) }</p>
                    </div>
                    <div className="col">
                        <h4>Tools</h4>
                        <p>{ formatText(props.tools) }</p>
                    </div>
                    {props.team === '' 
                        ? <></>
                        :   <div className="col">
                                <h4>Collaborators</h4>
                                <p>{ formatText(props.team) }</p>
                            </div>
                    }
                    <div className="col">
                        <h4>Timeline</h4>
                        <p>{ props.dates }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro