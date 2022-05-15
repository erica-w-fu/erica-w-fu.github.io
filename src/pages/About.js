import React from 'react';
import './Pages.css';

import hello from '../media/About/hello.png'
import doodles from '../media/About/doodles.png'
import profile from '../media/About/profile.png'

function About() {
    return (
        <div className="body page-body" id="about-container">
            <div className="row">
                <div className="column">
                    <img src={hello} className="about-doodle"></img>
                    <div className="divider"></div>
                    <p>
                        Erica Fu is a UI/UX designer, front-end/full stack developer, and <a href="https://www.dfaxcmu.org/" target='_blank'>student club leader</a> at Carnegie Mellon University. 
                    </p>
                    <p>
                        She hopes to use her skills to design and create digital products or services that help others.
                    </p>
                    <p>
                        Throughout her work and play, Erica loves to create. She has made <a href="https://www.instagram.com/ericacreatesss/" target='_blank'>a variety of things</a> through different mediums such as baking, painting, textiles, scrap materials, and more. She also loves to listen to music and plays the piano and guitar.
                    </p>
                    <img src={doodles} className="about-doodle"></img>
                </div>
                <div className="column">
                    <img src={profile}></img>
                </div>
            </div>
        </div>
    );
}

export default About;