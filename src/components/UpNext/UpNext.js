import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import '../../App.css';
import './UpNext.css';

import { BlockEmphasis } from "../TextBlocks/TextBlocks.js";


function UpNext({title, link, img, imgBG}) {
    
    const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'auto'});
	};

    const [nextHovered, setNextHovered] = useState(false);


    return (
        <NavLink
            to={link}
            className='bordered-section nav-bar-links upnext-container'
            onClick={scrollToTop}
            onMouseEnter={() => setNextHovered(true)}
            onMouseLeave={() => setNextHovered(false)}
        >
            <div className="flex-row"  style={nextHovered ? { '--next-up-color': 'white' } : {'--next-up-color': 'var(--black)' }}>
                <div className="flex-row upnext-content">
                    <small className=" caption" style={nextHovered ? { 'color': 'white' } : {'color': 'var(--subdued)' }}>Up next:</small>
                    <div class="arrow-line-container">
                        <div class="arrow-line">
                        </div>
                    </div>
                </div>
                <h1 className="upnext-title">{title}</h1>
                <div class="arrow-line-container">
                    <div class="arrow-line">
                        <span class="arrow-head"></span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default UpNext;