import React, {useState} from 'react';
import '../../App.css';
import './ProjectCard.css';
import { makeTags, projectImg, projectDemo } from '../data/Data.js'
import { NavLink } from 'react-router-dom';

import PopUp from '../PopUp/PopUp'

import gif from '../../media/peek.gif'

function ProjectCard(props) {

    const scrollToTop = () => {
		window.scrollTo({top: 0});
	};

    const [buttonPopUp, setButtonPopUp] = useState(false); 

    return (
        <>  
        { props.card===undefined ? 
            // UX project cards
            <NavLink to={"/" + props.component} className="card-link" onClick={scrollToTop}>
            <div className="card-container">
                { props.index%2 === 1 ? 
                    <div className="row">
                        <div className="column">
                            <img src={projectImg(props.component)} className={props.imgType} alt="#{props.title} card"></img>
                        </div>
                        <div className="column">
                            <p>{ props.title }</p>
                            <h1>{ props.highlight }</h1>
                            <div className="featured-tags">{ makeTags(props.tags) }</div>
                        </div>
                    </div> 
                : 
                    <div className="row reverse">
                        <div className="column align-right">
                            <p>{ props.title }</p>
                            <h1>{ props.highlight }</h1>
                            <div className="featured-tags">{ makeTags(props.tags) }</div>
                        </div>
                        <div className="column">
                            <img src={projectImg(props.component)} className={props.imgType} alt="#{props.title} card"></img>
                        </div>
                    </div>
                }
                <img src={gif} className="card-gif" alt="surprise" />
            </div>
            </NavLink>
            :
            // Development project cards
            <div className="card-container-2">
                <div className="row reverse">
                    <div className="column">
                        <p>{ props.title }</p>
                        <h2 className="unbold"><b>{ props.highlightbold }</b> { props.highlight }</h2>
                        <div className="row">
                            <div className="featured-tags">{ makeTags(props.tags) }</div>
                            { props.linkTitle === '' ? 
                                <></>
                                :
                                (props.link === '' ?
                                <>
                                    <button onClick={()=>setButtonPopUp(true)}>{props.linkTitle}</button>
                                    <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                        <video controls autoPlay>
                                            <source style={{height:"100%"}} src={projectDemo(props.component)} type="video/mp4"/>
                                        </video>
                                    </PopUp>
                                </>
                                :
                                <a href={ props.link } target="_blank">
                                    <button>{props.linkTitle}</button>
                                </a>)
                            }   
                        </div>
                    </div>
                    <div className="column">
                        <img src={projectImg(props.component)} className={props.imgType} alt="#{props.title} card"></img>
                    </div>
                </div>
            </div>
        }
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