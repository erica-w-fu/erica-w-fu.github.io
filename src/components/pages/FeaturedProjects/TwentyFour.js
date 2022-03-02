import React from "react";
import FeaturedIntro from "../../FeaturedIntro/FeaturedIntro";
import Section from '../../FeaturedContent/FeaturedContent.js';

import wireframe from './media/24-wireframes.jpg';
import demo from './media/24-demo.mp4';

function TwentyFour() {
    return(
        <>
            <FeaturedIntro
                key="twentyfour"
                component="twentyfour"
                title="24"
                date="June 2019 - January 2021"
                summary="Created a mobile version of my brother’s favorite card game, 24, first evaluating what features made the physical card game fun and incorporating them into the digital version."
                responsibilities="Wireframing, Research, Mobile App Development "
                tools="Xcode\nSwift"
                imgType="uncropped"
                link=""
                team=""
            />
            <div className="divider"></div>
            <div className="divider"></div>
            <p>Used the human-centered design process taught by Design For America to develop this project.</p>
            <Section 
                title="Identify"
            >
                <h6>How can I convert the physical card game, 24, into a digital form for my family?</h6>
                <small>
                    To play 24, players take four cards from the deck and use simple arithmetic to get a solution of 24. This game is commonly played and enjoyed by my family.
                </small>
            </Section>
            <Section 
                title="Immerse"
            >
                <h6>Interviews</h6>
                <small>
                    interviewed my family to gain insights on what the digital game should include
                </small>
                <ul>
                    <li>competitiveness makes the game fun</li>
                    <li>physical game includes slapping and pointing to declare the answer</li>
                    <li>the game stimulates the brain since there is math involved</li>
                </ul>
                <br></br>
                <h6>Competitive analysis</h6>
                <small>
                    tested other 24 apps on the app store to understand what people have already made
                </small>
                <ul>
                    <li>apps all use the same mechanism to solve the numbers</li>
                    <li>apps do not include any multiplayer functions</li>
                    <li>reviews point out that apps sometime gives unsolvable problems</li>
                </ul>
            </Section>
            <Section 
                title="Reframe"
            >
                <h6><div className="unbolded">How can I convert the physical card game, 24, into a digital form for my family </div> 
                    so that the competitve and brain stimulating aspects of the game remain?</h6>
            </Section>
            <Section 
                title="Ideate"
            >
                <p>Created wireframes to map out user interactions with the interface and with other players</p>
                <br></br>
                <br></br>
                <img src={ wireframe } className="featured-content-media"></img>
            </Section>
            <Section 
                title="Create"
            >
                <video width="30%" controls >
                    <source src={demo} type="video/mp4"/>
                </video>
                
            </Section>
            <Section 
                title="Test"
            >
                <h6>User testing</h6>
                <small>
                    conducted user tests with my family
                </small>
                <ul>
                    <li>found that buttons were intuitive and understandable</li>
                    <li>family really appreciated the algorithm that displayed potential solutions</li>
                </ul>
                <br></br>
                <h6>Next steps</h6>
                <small>
                    how I hope to expand this project
                </small>
                <ul>
                    <li>implement full multiplayer functionalities</li>
                    <li>deploy on the app store for anyone to play</li>
                </ul>
            </Section>
        </>
    )
}

export default TwentyFour;