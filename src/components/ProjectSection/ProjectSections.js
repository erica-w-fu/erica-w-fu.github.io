import React from "react";
import './ProjectSection.css';

import ThirtyDayAdulting from './ProjectMediaComponents/ThirtyDayAdulting.js';
import TwentyFour from './ProjectMediaComponents/TwentyFour.js';
import SentenceMosaics from './ProjectMediaComponents/SentenceMosaics.js';
import DFAWebsite from './ProjectMediaComponents/DFAWebsite.js';
import DuquesneWebsite from './ProjectMediaComponents/DuquesneWebsite.js';
import Multitask from './ProjectMediaComponents/Multitask.js';
import Fish from './ProjectMediaComponents/Fish.js';
import BitLogo from './ProjectMediaComponents/BitLogo.js';
import CommunicationDesign from './ProjectMediaComponents/CommunicationDesign.js'
import Microsite from './ProjectMediaComponents/Microsite.js'
import Art from './ProjectMediaComponents/Art.js'
import CrossCountryCommunications from  './ProjectMediaComponents/CrossCountryConnections.js'
import AcrylicPourPaintingPlatform from  './ProjectMediaComponents/AcrylicPourPaintingPlatform.js'
import TextileWork from  './ProjectMediaComponents/TextileWork.js'

function ProjectSections(props) {
    
    const projectId = props.component.toString().trim();

    return (
        <div className='project-card'>
            <div className="one-line">
                <h3 className="one-line-item">{ props.title }</h3>
                <h5 className="one-line-item project-dates">{ props.dates }</h5>
            </div>
            <p className="summary">{ props.body }</p>
            {
                props.link === '' 
                ? <></>
                : <p>For more information, click <a className="link-color underline" href={ props.link } target="_blank">here</a>.</p> 
            }

            <Project id={ projectId }/>
            
        </div>
    );
}

// function importAll(r) {
//     return r.keys().map(r);
// }

const Project = ({ id }) => {
    switch (id) {
        case "thirty_day_adulting":
            return <ThirtyDayAdulting />;
        case "twentyfour":
            return <TwentyFour />;
        case "sentence_mosaics":
            return <SentenceMosaics />;
        case "dfa_website":
            return <DFAWebsite />;
        case "duquesne_incline":
            return <DuquesneWebsite />;
        case "multitask":
            return <Multitask />;
        case "fish":
            return <Fish />;
        case "bit_logo":
            return <BitLogo />;
        case "communication_design":
            return <CommunicationDesign />;
        case "microsite":
            return <Microsite />;
        case "art":
            return <Art />;
        case "ccc":
            return <CrossCountryCommunications />;
        case "acrylic_pour_painting_platform":
            return<AcrylicPourPaintingPlatform />;
        case "textile_work":
            return <TextileWork />;
        default:
            return <p>{id}</p>;
    }
};

export default ProjectSections;
