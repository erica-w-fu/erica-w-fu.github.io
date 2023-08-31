import React from 'react';
import './About.css';

import doodles from '../../media/About/doodles.png'
import profile from '../../media/About/profile.png'

function About() {
    return (
        <div className="body page-body" id="about-container">
            <div className="row reverse">
                <div className="column">
                    <h3>A bit about me!</h3>
                    <br></br>
                    <p>
                        I love to create. For work, I design interfaces and experiences to help others in some way. Outside of work I make <a href="https://www.instagram.com/ericacreatesss/" target='_blank'>a variety of things</a> through different mediums such as textiles, baking, and painting. My current dream is to make all of my clothes in the future.
                    </p>
                    <p>
                        I also love to listen to music, play guitar and piano, my cat Sesame, and anything Sanrio or Ghibli.
                    </p>
                    <div className="about-doodle">
                        <img src={doodles} className="about-image"></img>
                    </div>
                </div>
                <div className="column">
                    <img src={profile} className="about-profile"></img>
                </div>
            </div>
        </div>
    );
}

export default About;