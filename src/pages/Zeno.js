import React from "react";
import { Fade } from 'react-reveal';

import { KeyValue, Block, BlockSemiEmphasis, BlockEmphasis, BlockImg, ProjectDetails, TakeawayBlock } from "../components/TextBlocks/TextBlocks.js";

import ZenoHeroBG from '../media/Zeno/HeroBG.png';
import ZenoHeroPaper from '../media/Zeno/HeroPaper.png';
import ZenoHeroDesktop from '../media/Zeno/HeroDesktop.png';
import ZenoPrototype from '../media/Zeno/Prototype.webp';
import SephoraDesignPattern from '../media/Zeno/SephoraDesignPattern.png';
import ZenoDesignPattern from '../media/Zeno/ZenoDesignPattern.png';
import ZenoBrandLogo from '../media/Zeno/ZenoBrandLogo.png';
import ZenoBrandColors from '../media/Zeno/ZenoBrandColors.png';
import ZenoBrandComponents from '../media/Zeno/ZenoBrandComponents.png';

import ZenoLogos from '../media/Zeno/Logos.png';




function Zeno() {

    return (
        <div className="bg-white">

              <div className="bg-img-gradient-bottom" 
                style={{
                    '--bg-image': `url(${ZenoHeroBG})`,
                    overflow: 'hidden',
                }}>
                <div className="grid-container zeno-hero">
                    <div className="col-3 zeno-img-left">
                        <img className="zeno-intro-img" style={{objectPosition:"right"}} src={ZenoHeroPaper} />
                    </div>

                    <div className="col-6 text-align-center zeno-text" style={{marginTop:'auto', marginBottom:'auto'}}>
                        <h2 className="unbold text-white" style={{marginTop: '64px', marginBottom:'64px'}}>
                            Transforming ML evaluation from an <strong>academic framework</strong> to an <strong>interactive experience</strong>
                        </h2>
                        <div className="zeno-meta">
                        <img style={{ height: '48px', objectFit:'contain'}} src={ZenoLogos} />
                        <small className="text-white">
                            Published at CHI ’23. Awarded Mozilla AI auditing grant.
                        </small>
                        </div>
                    </div>

                    <div className="col-3 zeno-img-right">
                        <img className="zeno-intro-img" style={{objectPosition:"left"}} src={ZenoHeroDesktop} />
                    </div>
                </div>
            </div>

            <div className="bg-white-dark">
                <div className="grid-container-condense">
                    <div className="centered-col-8">
                        <ProjectDetails 
                            role = "Lead UX Designer"
                            collaborators = {`Developers,
                                        Carnegie Mellon Professors and PhD Students`}
                            timeframe = {`May 2022 - Dec 2023`}
                            companySize = "Small (5-10)"
                        />
                    </div>
                </div>
            </div>
            {/* My contribution */}
            <div className="grid-container">
                <div className="centered-col-8">
                    <BlockSemiEmphasis
                        caption = "My contribution"
                        title = {<div className="unbold"><strong>Sole designer</strong> on award-winning academic project</div>}
                        body = "I defined the brand, user experience, and design direction from inception of the AI evaluation framework and platform. This project introduced me to advocating for user experience among AI strategy and complex systems. As a research assistant, I defined key design patterns and authored them in the research paper and collaborated closely with developers to bring them to life in a functional platform."
                    />
                </div>
            </div>
            {/* Problem solution overview */}
            <div className="bg-dark">
                <div className="grid-container text-white">
                    <Fade bottom>
                    <div className="col-12 text-align-center">
                        <h2>Lowering barriers to ML evaluation</h2>
                    </div>
                    </Fade>
                    <div className="col-12">
                        <div className="flex-row">
                            <div className="flex-item">
                                <Block  
                                    caption = "Problem"
                                    title = {<><strong>Non-technical users lack accessible tools</strong> to evaluate and share ML model performance</>}
                                    body = "Model evaluation currently requires complex, code-driven workflows. However, most ML models are developed by cross-functional teams with stakeholders in non-technical roles like product managers, design, marketing, and HR who collectively decide how a model should behave and identify potential failures. Limited communication results in unrealistic expectations of model performance and risk of undetected bias."
                                />
                            </div>
                            <div className="flex-item">
                                <Block  
                                    caption = "Solution"
                                    title = {<><strong>Interactive ML evaluation platform for non-technical users</strong></>}
                                    body = "By shifting code-driven workflows into intuitive visual tools (like drag and drop interfaces, filter panels), we empower non-technical users to evaluate model performance and create reports to improve organizations’ shared understanding of model behavior."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="centered-col-8">
                        <img src={ ZenoPrototype } style={{filter: "drop-shadow(0 0 10px black)"}}></img>
                    </div>
                    <Fade bottom>
                    <div className="centered-col-6">
                        <Block
                            caption = "Impact"
                            title = {<>Expanded bias detection <strong>from a technical effort to a shared responsibility</strong></>}
                            body = "We equipped teams (beyond just data-science or ML developers) to integrate fairness and accountability earlier in ML workflows, shifts evaluation from a specialized task to a shared responsibility, and strengthens collaboration across disciplines."
                        />
                    </div>
                    </Fade>
                </div>
            </div>
            <div className="grid-container">
                <Fade bottom>
                <div className="centered-col-6 text-align-center">
                    <BlockSemiEmphasis
                        caption = "Approach"
                        title = {<><strong>Adapted familiar design patterns</strong> from mainstream consumer apps</>}
                    />
                </div>
                </Fade>
                <div className="col-12">
                    <div className="flex-row">
                        <div className="flex-item">
                            <BlockImg 
                                title = {<p>
                                <strong>Example: Sephora e-commerce experience</strong>
                                </p>}
                                img = {SephoraDesignPattern}
                                body="Familiar, user-friendly patterns that help non-technical users navigate and filter large amounts of data"
                            />
                        </div>
                        <div className="flex-item">
                            <BlockImg
                                title = {<p>
                                <strong>Zeno</strong>
                                </p>}
                                img = {ZenoDesignPattern}
                                body="Applying these patterns to ML evaluation"
                            />
                        </div>
                    </div>
                </div>
                <div className="mobile-spacer-24"/>
                <div className="centered-col-6">
                    <div className="dotted-line"></div>
                </div>
                <div className="mobile-spacer-24"/>
                <Fade bottom>
                <div className="centered-col-6 text-align-center">
                    <BlockSemiEmphasis
                        caption = "Approach"
                        title = {<>Established <strong>brand identity</strong> and <strong>scalable components</strong></>}
                    />
                </div>
                </Fade>
                <div className="col-12">
                    <div className="flex-row">
                        <div className="flex-item">
                            <BlockImg 
                                title = {<p>
                                <strong>Logo</strong> to reflect slice-based analysis in ML evaluation
                                </p>}
                                img = {ZenoBrandLogo}
                            />
                        </div>
                        <div className="flex-item">
                            <BlockImg
                                title = {<p>
                                <strong>Color tokens</strong> for consistency across design and code
                                </p>}
                                img = {ZenoBrandColors}
                            />
                        </div>
                        <div className="flex-item">
                            <BlockImg
                                title = {<p>
                                <strong>Component library</strong> for rapid development
                                </p>}
                                img = {ZenoBrandComponents}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid-container">
                    <div className="centered-col-10">
                        <TakeawayBlock
                            title = {<div>Design makes complex systems approachable</div>}
                            body = "This project showed how even the most complex machine learning systems can be distilled into clear, user‑centered design patterns. My technical background in Information Systems was a key strength, allowing me to deeply understand the underlying ML systems, break down their complexity, and translate them into approachable, user-centered design patterns."
                        />
                        <div className="spacer-64"></div>
                        <div className="spacer-64"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zeno;