import React, {useState} from 'react';
import '../../App.css';
import './ProjectCard.css';
import { makeTags, projectImg, projectDemo } from '../data/Data.js'
import { NavLink } from 'react-router-dom';

import PopUp from '../PopUp/PopUp'

import gif from '../../media/peek.gif'
import catPeek from '../../media/peek.png'


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
                            <img src={ projectImg(props.component) } className="card-img" alt="#{props.title} card"></img>
                        </div>
                        <div className="column">
                            <h4>{ props.title }</h4>
                            <h1>{ props.highlight }</h1>
                            <div className="featured-tags">{ makeTags(props.tags) }</div>
                        </div>
                    </div> 
                : 
                    <div className="row reverse">
                        <div className="column align-right">
                            <h4>{ props.title }</h4>
                            <h1>{ props.highlight }</h1>
                            <div className="featured-tags">{ makeTags(props.tags) }</div>
                        </div>
                        <div className="column">
                            <img src={ projectImg(props.component) } className="card-img" alt="#{props.title} card"></img>
                        </div>
                    </div>
                }
                {/* <div className="gif-container">
                    <img src={gif} className="card-gif" alt="surprise" />
                </div> */}
                <div className="card-cat-container">
                    <img src={catPeek} className="card-cat" alt="surprise" />
                </div>
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
                        <img src={projectImg(props.component)} className="card-img" alt="#{props.title} card"></img>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ProjectCard;