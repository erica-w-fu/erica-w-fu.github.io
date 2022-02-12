import React from "react";
import FeaturedIntro from "../../FeaturedIntro/FeaturedIntro";
import Section from '../../FeaturedContent/FeaturedContent.js';

import wireframe from './media/24-wireframes.jpg';
import demo from './media/24-demo.mp4';

function TwentyFour() {
    return(
        <>
            <FeaturedIntro
                key="twenty_four"
                title="24"
                date="June 2019 - January 2021"
                summary="Created a mobile version of my brother’s favorite card game, 24, first evaluating what features made the physical card game fun and incorporating them into the digital version."
                responsibilities="Wireframing, Research, Mobile App Development "
                tools="Xcode\nSwift"
                img="twenty_four"
                imgType="featured-img-uncropped"
                link=""
            />
            <div className="divider"></div>
            <div className="divider"></div>
            <p>Used the human-centered design process taught by Design For America to develop this project.</p>
            <Section 
                title="Identify"
            >
                <h6>How can I convert the physical card game, 24, into a digital form for my family?</h6>
                <p>
                    To play 24, players take four cards from the deck and use simple arithmetic to get a solution of 24. This game is commonly played and enjoyed by my family.
                </p>
            </Section>
            <Section 
                title="Immerse"
            >
                <h6>Interviews</h6>
                <p>
                    intereviewed my family to gain insights on what the digital game should include
                </p>
                <ul>
                    <li>competitiveness makes the game fun</li>
                    <li>physical game includes slapping and pointing to declare the answer</li>
                    <li>the game stimulates the brain since there is math involved</li>
                </ul>
                <br></br>
                <h6>Competitive analysis</h6>
                <p>
                    tested other 24 apps on the app store to understand what people have already made
                </p>
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
                <p>
                    conducted user tests with my family
                </p>
                <ul>
                    <li>found that buttons were intuitive and understandable</li>
                    <li>family really appreciated the algorithm that displayed potential solutions</li>
                </ul>
                <br></br>
                <h6>Next steps</h6>
                <p>
                    how I hope to expand this project
                </p>
                <ul>
                    <li>implement full multiplayer functionalities</li>
                    <li>deploy on the app store for anyone to play</li>
                </ul>
            </Section>
        </>
    )
}

export default TwentyFour;