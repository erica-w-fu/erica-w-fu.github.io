import React, {useState} from 'react';
import '../../App.css';
import './ProjectCard.css';
import { makeTags, projectImg } from '../data/Data.js'
import PopUp from '../PopUp/PopUp.js'
import FeaturedIntro from '../FeaturedIntro/FeaturedIntro.js'

function ProjectCard(props) {

    const [buttonPopUp, setButtonPopUp] = useState(false); 
    return (
        <>
            <div className="project-card-container" onClick={()=>setButtonPopUp(true)}>
                <img src={projectImg(props.component)} className={props.imgType} alt="#{props.title} card"></img>
                <div className="card-text">
                    <div className="featured-tags">{ makeTags(props.tags) }</div>
                    <h3>{ props.title }</h3>
                </div>
            </div>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <FeaturedIntro
                    key={ props.key }
                    component={ props.component }
                    title={ props.title }
                    date={ props.dates }
                    summary={ props.summary }
                    link={ props.link }
                    linkTitle={ props.linkTitle }
                    responsibilities={ props.responsibilities }
                    tools={ props.tools }
                    team={ props.team }
                    imgType={ props.imgType }
                />
            </PopUp>
        </>
    );
}

// function cardImg(id) {
//     switch (id) {
//         case "thirty_day_adulting":
//             return  <img src={thirty_day_adulting} className="about-media" alt="#{id} card"></img>;
//         case "twentyfour":
//             return  <img src={twentyfour} className="about-media-contain" alt="#{id} card"></img>;
//         case "sentence_mosaics":
//             return  <img src={sentence_mosaics} className="about-media-contain" alt="#{id} card"></img>;
//         case "dfa_website":
//             return  <img src={dfa_website} className="about-media-top" alt="#{id} card"></img>;
//         case "duquesne_incline":
//             return  <img src={duquesne_incline} className="about-media-top" alt="#{id} card"></img>;
//         case "microsite":
//             return  <img src={microsite} className="about-media-top" alt="#{id} card"></img>;
//         case "ccc":
//             return  <img src={ccc} className="about-media" alt="#{id} card"></img>;
//         case "acrylic_pour_painting_platform":
//             return  <img src={acrylic_pour_painting_platform} className="about-media-top" alt="#{id} card"></img>;
//         case "reducing_singleuse":
//             return  <img src={reducing_singleuse} className="about-media" alt="#{id} card"></img>;
//     }
// } 

export default ProjectCard;