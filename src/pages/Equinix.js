import React from "react";
import {useEffect, useRef, useState} from "react";
import { Fade, Bounce } from 'react-reveal';

import { KeyValue, IconBullet, Block, BlockSemiEmphasis, BlockEmphasis, BlockImg, ProjectDetails, TakeawayBlock } from "../components/TextBlocks/TextBlocks.js";

import EquinixLogo from '../media/Logos/EquinixLogo.png';
import EquinixIntro from '../media/Equinix/Intro.gif';
import ImpactBG from '../media/Equinix/ImpactBG.png';
import WireframesOverview from '../media/Equinix/WireframesOverview.png';
import DesignSystemOverview from '../media/Equinix/DesignSystemOverview.png';
import Prototype from '../media/Equinix/Prototype.gif';
import DesignSystem from '../media/Equinix/DesignSystem.png';
import HandoffFiles from '../media/Equinix/HandoffFiles.png';
import Analytics from '../media/Equinix/Analytics.png';
import ThinkAloud from '../media/Equinix/ThinkAloud.png';
import ThematicAnalysis from '../media/Equinix/ThematicAnalysis.png';
import ProductAdvocate from '../media/Equinix/ProductAdvocate.png';
import TechAdvocate from '../media/Equinix/TechAdvocate.png';


function Equinix() {

    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
    const refs = sectionRefs.current = [
        document.getElementById("equinix-contribution-section-1"),
        document.getElementById("equinix-contribution-section-2"),
        document.getElementById("equinix-contribution-section-3"),
    ];

    console.log('refs found:',refs);

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            }
        });
        },
        {
        threshold: 0.1, // Adjust as needed
        }
    );

    sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
    }, []);


    return (
        <>
        <div id="equinix" className="bg-white">
            <div className="grid-container" style={{paddingTop:'64px'}}>
                <img className="logo" src={ EquinixLogo }></img>
                <div className="centered-col-10">
                    <img src={ EquinixIntro }></img>
                </div>
            </div>
            <div className="bg-white-dark">
                <div className="grid-container-condense">
                    <div className="centered-col-8">
                        <ProjectDetails 
                            role = "Lead UX Designer"
                            collaborators = {`UX Research + Content
                                        Design system team
                                        Product
                                        Engineering`}
                            timeframe = {`June - August 2023
                                        3 months`}
                            companySize = "Large"
                        />
                    </div>
                </div>
            </div>
            {/* Results and impact */}
            <div className="bg-img-gradient-hor"
                style={{'--bg-image': `url(${ImpactBG})`}}
            >
                <div className="grid-container text-white">
                    <div className="col-2" style={{paddingTop:'8px'}}>
                        <p className="caption">Results and impact</p>
                    </div>
                    <div className="col-8">
                        <div className="quad-row">
                            <div className="flex-item">
                                <h1 className="unbold">100%</h1>
                                <div className="spacer-4"></div>
                                <p>legacy flows retired</p>
                            </div>
                            <div className="flex-item">
                                <h1 className="unbold">50%</h1>
                                <div className="spacer-4"></div>
                                <p>reduction in design cycles</p>
                            </div>
                            <div className="flex-item">
                                <h1 className="unbold">75%</h1>
                                <div className="spacer-4"></div>
                                <p>reduction in dev cycles</p>
                            </div>
                            <div className="flex-item">
                                <h1 className="unbold">100%</h1>
                                <div className="spacer-4"></div>
                                <p>consumer-facing team usage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Problem solution summary*/}
            <div className="grid-container">
                <div className="col-12 text-align-center">
                    <h2>Part 1: Increasing adoption</h2>
                </div>
                <div className="col-12">
                    <div className="flex-row">
                        <div className="flex-item">
                            <Block  
                                caption = "Problem"
                                title = {<><span className="text-red">Previous redesign</span> saw low adoption due to <strong>limited user validation</strong></>}
                                body = "A modernized network ordering experience failed to shift user behavior. Analytics showed users preferred legacy tools because the redesign lacked visuals, intuitive entry points, and critical order details, forcing them to leave mid‑task."
                            />
                        </div>
                        <div className="flex-item">
                            <Block  
                                caption = "Solution"
                                title = {<><span className="text-blue">My redesign</span> modernized the look and feel while <strong>keeping trusted features</strong></>}
                                body = "I used insights from analytics to reintroduce and modernize engaging visuals and redesign key components for clarity, then partnered with research to validate improvements through think‑aloud studies."
                            />
                        </div>
                        <Fade right>
                        <div className="flex-item">
                            <Block
                                caption = "Impact"
                                title = {<>
                                    <IconBullet
                                        img={<span role="img" aria-label="User adoption">✅</span>}
                                        text={<strong>Increase user adoption</strong>}
                                    />
                                    <div className="spacer-8"></div>
                                    <IconBullet 
                                        img={<span role="img" aria-label="Decomission">🗑️</span>}
                                        text={<strong>Decommission legacy versions</strong>}
                                    />
                                    <div className="spacer-8"></div>
                                    <IconBullet 
                                        img={<span role="img" aria-label="Scale">🚀</span>}
                                        text={<strong>Prepare for scale</strong>}
                                    />
                                </>}
                            />
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-12">
                    <img src={ WireframesOverview }></img>
                </div>
                <div className="centered-col-6">
                    <div className="dotted-line"></div>
                </div>
                <div className="col-12 text-align-center">
                    <h2>Part 2: Scaling through design systems</h2>
                </div>
                <div className="col-12">
                    <div className="flex-row">
                        <div className="flex-item">
                            <Block  
                                caption = "Problem"
                                title = {<>Inconsistent experiences<strong> and slow siloed development</strong></>}
                                body = "Independently built products led to fragmented, inconsistent user experiences across similar network tasks. This undermined user trust and slowed development at scale."
                            />
                        </div>
                        <div className="flex-item">
                            <Block  
                                caption = "Solution"
                                title = {<>Validated and constructed a <strong>product-level design system</strong></>}
                                body = "I established the design system using Figma components and developer handoff files, which were developed and tested alongside Part 1 to validate their effectiveness."
                            />
                        </div>
                        <Fade right>
                        <div className="flex-item">
                            <Block
                                caption = "Impact"
                                title = {<>
                                    <IconBullet
                                        img={<span role="img" aria-label="Happy">😁</span>}
                                        text={<strong>Consistent customer experiences</strong>}
                                    />
                                    <div className="spacer-8"></div>
                                    <IconBullet 
                                        img={<span role="img" aria-label="Reduced time">⌛</span>}
                                        text={<><strong>Faster</strong> future design and dev</>}
                                    />
                                    <div className="spacer-8"></div>
                                    <IconBullet 
                                        img={<span role="img" aria-label="Expansion">🚀</span>}
                                        text={<><strong>Scalable expansion</strong> across products</>}
                                    />
                                    <div className="spacer-8"></div>
                                    <IconBullet 
                                        img={<span role="img" aria-label="Cross-functional">🧑‍🤝‍🧑</span>}
                                        text={<><strong>Cross-functional reuse</strong> beyond original scope</>}
                                    />
                                </>}
                            />
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-12">
                    <img src={ DesignSystemOverview }></img>
                </div>
            </div>
            {/* Contributions */}
            <div className="bg-white-dark" 
                style={{
                    position: 'sticky', 
                    top: 0,
                    zIndex: 10, // optional: ensures it sits above other content
                    }}>
                <div className="grid-container-condense" style={{paddingTop:'16px',paddingBottom:'16px', gap:'8px'}}>
                    <div className="col-3">
                        <small
                        className="caption subdued"
                        >
                        My contributions
                        </small>
                    </div>
                    <div className="col-3">
                        <small
                        className={`caption ${activeSection === 'equinix-contribution-section-1' ? 'text-emphasize' : ''}`}
                        >
                        1. Leading design
                        </small>
                    </div>
                    <div className="col-3">
                        <small
                        className={`caption ${activeSection === 'equinix-contribution-section-2' ? 'text-emphasize' : ''}`}
                        >
                        2. Co-driving research
                        </small>
                    </div>
                    <div className="col-3">
                        <small
                        className={`caption ${activeSection === 'equinix-contribution-section-3' ? 'text-emphasize' : ''}`}
                        >
                        3. Advocating for users
                        </small>
                    </div>
                </div>
            </div>
            <div id="equinix-contribution-section-1" className="grid-container">
                <Fade bottom>
                <div className="centered-col-6 text-align-center">
                    <BlockEmphasis
                        caption = {<h2><span role="img" aria-label="one">1️⃣</span></h2>}
                        title = "Leading design"
                        body = "I was the lead designer on this project, taking initiative to not only modernize the experience, but to also construct a reusable component library to set the standard for future products. I was mentored by a senior designer and supported by a design manager."
                    />
                </div>
                </Fade>
                <div className="col-12"></div>
                <Fade left>
                <div className="col-3">
                    <h5><strong>Interactive prototypes</strong> for user testing</h5>
                </div>
                </Fade>
                <div className="col-9">
                    <img src={ Prototype }></img>
                </div>
                <Fade left>
                <div className="col-3">
                    <h5><strong>Figma component library</strong> for accelerated future design work</h5>
                </div>
                </Fade>
                <div className="col-9">
                    <img src={ DesignSystem }></img>
                </div>
                <Fade left>
                <div className="col-3">
                    <h5><strong>Component handoff documents</strong> for accelerated future development</h5>
                </div>
                </Fade>
                <div className="col-9">
                    <img src={ HandoffFiles }></img>
                </div>
            </div>
            <div id="equinix-contribution-section-2" className="grid-container">
                <Fade bottom>
                <div className="centered-col-6 text-align-center">
                    <BlockEmphasis
                        caption = {<h2><span role="img" aria-label="two">2️⃣</span></h2>}
                        title = "Co-driving research"
                        body = "I closely partnered with the UX researcher throughout all research activities, building strong trust that enabled rapid turnaround within tight timelines."
                    />
                </div>
                </Fade>
                <div className="col-12"></div>
                <div className="col-12">
                    <div className="flex-row">
                        <div className="flex-item">
                            <BlockImg
                                title = {<><strong>Analytics</strong> to identify why users stick with legacy systems</>}
                                img = {Analytics}
                                body = {[
                                    "Identified drop-off funnels",
                                    "Analyzed behavioral data",
                                    "Generated hypothesis to pitch targeted design improvements"
                                ]}
                            />
                        </div>
                        <div className="flex-item">
                            <BlockImg
                                title = {<><strong>15 think-loud usability studies</strong> to validate new designs</>}
                                img = {ThinkAloud}
                                body = {[
                                    "Helped shape research protocol",
                                    "Prototyped high-fidelity interactive designs for think-aloud tasks",
                                    "Documented detailed user feedback to inform actionable design changes",
                                    "Asked clarifying questions to ensure richer data for synthesis"
                                ]}
                            />
                        </div>
                        <div className="flex-item">
                            <BlockImg
                                title = {<><strong>Thematic analysis</strong> of usability studies</>}
                                img = {ThematicAnalysis}
                                body = {[
                                    "Consolidated findings into key insights, using counts to ensure accuracy and build credibility",
                                    "Pulled quotes to strengthen insights with illustrative evidence to stakeholders"
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="equinix-contribution-section-3" className="grid-container">
                <Fade bottom>
                <div className="centered-col-6 text-align-center">
                    <BlockEmphasis
                        caption = {<h2><span role="img" aria-label="three">3️⃣</span></h2>}
                        title = "Advocating for users"
                        body = "I promoted user-centered thinking with product and engineering stakeholders."
                    />
                    <div className="spacer-32"></div>
                </div>
                </Fade>

                <div className="col-12"/>

                <Fade left>
                <div className="col-3">
                    <Block
                        caption = "In Product conversations"
                        title = {<><strong>Invest in user feedback</strong> to avoid wasted effort on future projects</>}
                        body = ""
                    />
                </div>
                </Fade>
                <div className="col-9" style={{paddingTop:"26px"}}>
                    <p>One challenge was advocating to revisit and redesign work that had already been deployed without testing. By combining analytics and user testing, we showed that restoring a modernized visual diagram—removed in the initial text‑heavy redesign—significantly improved user clarity and confidence.</p> 
                    <div className="spacer-24"></div>
                    <img src={ ProductAdvocate }></img>
                    <div className="spacer-24"></div>
                    <p>Presenting these data-driven insights helped shift stakeholder perception, showing that redesigning was not rework but a worthwhile investment. The resulting solution was positioned not only as an improvement to the current experience, but as a scalable, reusable template for future connection flows.</p>
                    <div className="spacer-24"></div>
                    <p>To support this mindset shift, we focused on educating stakeholders on the value of UX: saving time, reducing risk, and increasing user confidence. In the final design presentation, I explicitly connected usability findings to design decisions, making the impact of research visible and reinforcing its role in shaping both the product and the broader design strategy.</p>
                    <div className="spacer-32"></div>
                </div>
                <div className="col-12"/>


                <Fade left>
                <div className="col-3">
                    <Block
                        caption = "In Tech conversations"
                        title = {<><strong>Unify experiences</strong> to reduce future tech debt</>}
                        body = ""
                    />
                </div>
                </Fade>
                <div className="col-9" style={{paddingTop:"26px"}}>
                    <img src={ TechAdvocate }></img>
                    <div className="spacer-24"></div>
                    <p>I collaborated with engineers to identify overlapping functionality and inconsistencies across ordering experiences. By introducing a component library, I helped teams avoid rebuilding similar features from scratch while ensuring that future applications used validated components.</p>
                    <div className="spacer-32"></div>
                </div>
            </div>
            {/* Takeaways */}
            <div className="grid-container">
                <div className="col-10">
                    <TakeawayBlock
                        title = "Intentional UX matters, even for technical users"
                        body = {<>There’s a common misconception that investing in research and UX design for technical users is less important because they can rely on documentation and eventually “figure it out.” In reality, effective design adds great value by reducing errors during critical decision-making moments.<br/><br/>UX designers must look beyond surface-level tasks to understand deeper user goals. For network engineers, this means designing trustworthy flows, information layouts that clearly highlight key content, and visualizations that help users accurately see their connections. These all ultimately support network engineers to prevent costly mistakes in high-stakes processes.</>}
                    />
                    <div className="spacer-64"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Equinix;