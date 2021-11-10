import React from "react";
import './FeaturedProjectSection.css'; 

import ThirtyDayDemo from '../ProjectSection/project-media/30 Day Adulting/30-day-demo.mov';
import SentenceMosaics from '../ProjectSection/ProjectMediaComponents/SentenceMosaics.js';
import cccImg from  '../ProjectSection/project-media/Cross Country Connections/ccc-mother.jpeg'


function FeaturedProjectSections(props) {
    
    const projectId = props.component.toString().trim();

    return (
        <>
            {
                (props.pos % 2 === 0) ? 
                <div className='featured-project-card'>
                    <div className="featured-media">
                        <Project id={ projectId }/>
                    </div>
                    <div className="divider"></div>
                    <div className="featured-text">
                        <h3 className="featured-header">{ props.title }</h3>
                        <p>{ props.summary }</p>
                    </div>
                </div>
                :
                <div className='featured-project-card'>
                    <div className="featured-text">
                        <h3 className="featured-header">{ props.title }</h3>
                        <p>{ props.summary }</p>
                    </div>
                    <div className="divider"></div>
                    <div className="featured-media">
                        <Project id={ projectId }/>
                    </div>
                </div>
            }
        </>
    );

}

export default FeaturedProjectSections;

const Project = ({ id }) => {
    switch (id) {
        case "thirty_day_adulting":
            return  <video className="videoInsert" controls >
                        <source src={ThirtyDayDemo} type="video/mp4"/>
                    </video>;
        case "ccc":
            return <img src={cccImg} className="featured-project-img"></img>;
        case "sentence_mosaics":
            return <SentenceMosaics />;
    }
}