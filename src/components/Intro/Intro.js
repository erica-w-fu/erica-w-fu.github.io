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
        <>
        <NavLink to='/' onClick={scrollToUX}>
            <button className="small-btn intro-btn">&lt;</button>
        </NavLink>
        <div className="row">
            <div className="column col-small">
                <h1>{ props.title }</h1>
                {
                    props.link === '' 
                    ? <></>
                    :   <div>
                            <a href={ props.link } target="_blank">
                                <button>{props.linkTitle}</button>
                            </a> 
                        </div>
                        
                }
                <h4>{ props.dates }</h4>
                <h5>{ formatText(props.summary) }</h5>
                <div>
                    <h4>Responsibilities:</h4>
                    <h5>{ props.responsibilities }</h5>
                </div>
                <div>
                    <h4>Tools:</h4>
                    <h5>{ formatText(props.tools) }</h5>
                </div>
                {
                    props.team === '' 
                    ? <></>
                    :   <div>
                            <h4>Team:</h4>
                            <h5>{ props.team }</h5>
                        </div>
                }
            </div>
            <div className="column col-big">
                <img src={ projectImg(projectId) } className="intro-img"></img>
            </div>
        </div>
        <hr></hr>
        </>
    )
}

export default Intro