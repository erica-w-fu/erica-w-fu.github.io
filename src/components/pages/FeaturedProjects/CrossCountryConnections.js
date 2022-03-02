import React from "react";
import FeaturedIntro from "../../FeaturedIntro/FeaturedIntro";
import Section from '../../FeaturedContent/FeaturedContent.js';

import physical from './media/CCC-physical.mp4';
import digital from './media/CCC-digital.mp4';
import threeDee from './media/CCC-3D.png';
import final from './media/CCC-final.jpeg';
import finalDemo from './media/CCC-finalDemo.mp4';

function CrossCountryConnections() {

    return(
        <>
            <FeaturedIntro
                key="ccc"
                component="ccc"
                title="Cross Country Connections"
                date="May 2021 - present"
                summary="Constructed installations to explore unique remote communication methods through tactile interactions with a large canvas.\n\n 
                    Our team of three students is funded by a Small Undergraduate Research Grant from CMU and advised by Physical Computing instructor Robert Zacharias."
                responsibilities="Research, Physical Prototyping, Digital Prototyping, User Testing, Software, Hardware, 3D Modeling"
                tools="Arduino\n
                Raspberry Pi\n
                Unity\n
                Fusion 360\n
                Python"
                imgType="uncropped"
                link="https://crosscountryconnections.github.io/index.html"
                linkTitle="Visit Website"
                team="Michelle Dang, Jennifer Zhang, Robert Zacharias"
            />
            <div className="divider"></div>
            <p>After taking Physical Computing and unlocking the powers of microprocessors, my friend and I decided to create an installation with our newfound skills. We knew that we both wanted to make something big and interactive, but we quickly realized that she would be staying at Pittsburgh while I would go hope to the Bay Area over the summer. 
                However, we decided to take advantage of our different locations, eventually choosing to create two large canvases that would sync across the country, giving us the ability to communicate through LEDs.</p>
            <br></br>
            <p>Our team made various physical and digital prototypes with different materials and methods to test out ideas before building the final installation.</p>
            <Section 
                title="Physical Protoype"
            >
                <p>Synchronized two physical prototypes</p>
                <br></br>
                <br></br>
                <div className="featured-col-container">
                    <div className="featured-col">
                        <h6>Methods</h6>
                        <ul>
                            <li>connected one board (in California) to the other (in Pittsburgh)</li>
                            <li>created a small version of our intended interaction to determine how to encourage connections between two remote users</li>
                        </ul>
                    </div>
                    <div className="featured-col">
                        <h6>Software</h6>
                        <ul>
                            <li>Arduino</li>
                            <li>Python</li>
                        </ul>
                        <br></br>
                        <h6>Materials</h6>
                        <ul>
                            <li>tactile buttons</li>
                            <li>LED lights</li>
                            <li>wires</li>
                            <li>cardboard and tape</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <video width="100%" controls>
                    <source src={physical} type="video/mp4"/>
                </video>
            </Section>
            <Section 
                title="Digital Protoype"
            >
                <p>Synchronized the physical prototype with a digital prototype</p>
                <br></br>
                <br></br>
                <div className="featured-col-container">
                    <div className="featured-col">
                        <h6>Methods</h6>
                        <ul>
                            <li>digitally simulated the button pressing mechanism to capture interactions</li>
                            <li>determined what size matrix would allow for creativity</li>
                        </ul>
                    </div>
                    <div className="featured-col">
                        <h6>Software</h6>
                        <ul>
                            <li>Unity</li>
                            <li>Arduino</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <video width="100%" controls>
                    <source src={digital} type="video/mp4"/>
                </video>
            </Section>
            <Section 
                title="3D Protoype"
            >
                <p>Planned for the final build</p>
                <br></br>
                <br></br>
                <div className="featured-col-container">
                    <div className="featured-col">
                        <h6>Methods</h6>
                        <ul>
                            <li>constructed schematic of cuts and engravings for kaser cutting</li>
                            <li>modeled how all the boards and components would fit together</li>
                        </ul>
                    </div>
                    <div className="featured-col">
                        <h6>Software</h6>
                        <ul>
                            <li>Fusion 360</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <img src={ threeDee } className="featured-content-media"></img>
            </Section>
            <Section 
                title="Final Installation"
            >
                <p>Used findings from all the previous prototypes to create a final installation</p>
                <br></br>
                <br></br>
                <div className="featured-col-container">
                    <div className="featured-col">
                        <h6>Methods</h6>
                        <ul>
                            <li>constructed by laser cutting acrylic, creating a button matrix, soldering wires, and more</li>
                            <li>used same methods as physical prototype to send signals and light board</li>
                            <li>used same methods as physical prototype to send signals and light board</li>
                        </ul>
                    </div>
                    <div className="featured-col">
                        <h6>Software</h6>
                        <ul>
                            <li>Arduino</li>
                            <li>Raspberry Pi</li>
                            <li>Python</li>
                        </ul>
                        <br></br>
                        <h6>Materials</h6>
                        <ul>
                            <li>frosted acrylic</li>
                            <li>tactile buttons</li>
                            <li>wires</li>
                            <li>wood</li>
                            <li>etc.</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <video width="100%" controls>
                    <source src={finalDemo} type="video/mp4" />
                </video>
                <img src={ final } className="featured-content-media"></img>
            </Section>
        </>
    )
}

export default CrossCountryConnections