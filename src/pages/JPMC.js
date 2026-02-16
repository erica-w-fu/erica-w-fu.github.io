import React from "react";
import {useState} from "react";
import { Fade } from 'react-reveal';

import {IconBullet, ProjectDetails, Block, BlockSemiEmphasis, TakeawayBlock} from "../components/TextBlocks/TextBlocks.js";

import JPMCLogo from '../media/Logos/JPMorganChaseLogoHover.png';
import JPMCBG from '../media/JPMC/HeroBG.webp';

import EnterprisePlatformModernization from '../media/JPMC/EnterprisePlatformModernization.svg';
import SpecialistCaseViewer from '../media/JPMC/SpecialistCaseViewer.svg';
import AIEnterpriseInsightsPlatform from '../media/JPMC/AIEnterpriseInsightsPlatform.svg';
import AIPoweredWorkflow from '../media/JPMC/AIPoweredWorkflow.svg';



function JPMC() {

    const projects = [
        { 
            id: 1,
            title: "Enterprise platform modernization",
            role: "Lead Designer, Service Designer, Workshop Facilitator",
            collaborators: "Product Teams, Business Units, External Vendor",
            timeframe: "3 months",
            contributions:
                <>
                    <IconBullet
                        img={<span role="img" aria-label="Alignment">🤝</span>}
                        text={<strong>Aligned 30+ stakeholders</strong>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Migration">🚚</span>}
                        text={<><strong>Migrated thousands of articles</strong> to an AI-powered search platform</>}
                    />
                </>,
            projectImg: EnterprisePlatformModernization,
            takeaways: [
                {
                    title: <>Visual artifacts turn stalled conversations into decisions</>,
                    body: "Aligning 30+ stakeholders across product teams, business units, and vendors meant endless meetings with little progress. My research partner and I co-organized an offsite using service blueprints to create a shared view of current systems and design stimuli to inspire thinking beyond technical constraints. Once teams could see the problem and solution rather than just discuss them, we moved from debate to decisions."
                }
            ]
        },
        { 
            id: 2,
            title: "Specialist case viewer",
            role: "Lead designer, Cross-Team Coordinator",
            collaborators: "Product Owner, Initiative Lead, 6 Sprint Teams (Product + Engineering)",
            timeframe: "3+ months",
            contributions:
                <>
                    <IconBullet
                        img={<span role="img" aria-label="Delivery">👩‍👩‍👧‍👧</span>}
                        text={<strong>Delivered across 6 sprint teams</strong>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Legacy applications">✅</span>}
                        text={<strong>Consolidated 12+ legacy applications</strong>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="End-to-end design">🛣️</span>}
                        text={<><strong>Led end-to-end</strong> scoping, research, design, and delivery</>}
                    />
                </>,
            projectImg: SpecialistCaseViewer,
            takeaways: [
                {
                    title: <>Scope experience first, not tech first</>,
                    body: "Product initially scoped work from a tech perspective, assigning features by system rather than user goals. This forced me to design specific features in isolation without enough context, risking inconsistencies and rework. I collaborated with the initiative lead to shift our approach to user goal-driven scoping, educating product on design methodology at the planning level. This created an effective partnership that enabled me to work efficiently as the sole designer across 6 sprint teams while consolidating complex systems."
                }
            ]
        },
        { 
            id: 3,
            title: "AI enterprise insights platform",
            role: "Lead Designer, Design Strategist, 0→1",
            collaborators: "MD Leader, Product, Engineering, UX Research",
            timeframe: "3 months",
            contributions:
                <>
                    <IconBullet 
                        img={<span role="img" aria-label="Enabled insights">📊</span>}
                        text={<strong>Enabled insights for 20+ product teams</strong>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Vision">🌱</span>}
                        text={<><strong>Influenced product vision</strong></>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet
                        img={<span role="img" aria-label="Delivery">🚀</span>}
                        text={<strong>Delivered 0->1 design work</strong>}
                    />
                </>,
            projectImg: AIEnterpriseInsightsPlatform,
            takeaways: [
                {
                    title: <>Design artifacts shape product priorities</>,
                    body: "When next steps were unclear, I created a demo video that leadership presented at a conference, generating excitement around the product and directly shaping our sprint priorities. Separately, when the team was thinking narrowly about an internal MVP, I created personas and blue-sky concepts that reframed our thinking toward firm-wide impact, aligning the team on a broader vision that has the capacity to serve hundreds of product teams."
                }
            ]
        },
        { 
            id: 4,
            title: "AI-powered workflow tool",
            role: "Lead Designer, Lead Researcher, Responsible AI Advocate",
            collaborators: "Product, AI Team, Business, Engineering",
            timeframe: "2 months",
            contributions:
                <>
                    <IconBullet
                        img={<span role="img" aria-label="Time">⏱️</span>}
                        text={<strong>Reduced task time by 55%</strong>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Adoption">🎉</span>}
                        text={<><strong>Achieved 100% adoption</strong> of new AI-powered specialist tool</>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Shifted strategy">➡️</span>}
                        text={<><strong>Shifted product strategy</strong> from forced adoption to value-focused rollout</>}
                    />
                    <div className="spacer-8"></div>
                    <IconBullet 
                        img={<span role="img" aria-label="Voiced issues">🗣️</span>}
                        text={<><strong>Voiced critical trust issues</strong> from usability testing with 9 specialists</>}
                    />
                </>,
            projectImg: AIPoweredWorkflow,
            takeaways: [
                {
                    title: <>User research drives trust in AI systems</>,
                    body: "Amidst the rush to integrate AI into workflows, the team lost focus on user needs and measurable impact. I led research and had open conversations with specialists about their concerns and distrust of new AI technologies. After surfacing these insights to stakeholders, the team reconsidered aggressive rollout plans and focused on building trust, ultimately shaping the tool into something specialists could rely on and achieve full adoption."
                },
                {
                    title: <>Reframe hard truths into next steps</>,
                    body: "When usability testing revealed major trust and efficiency issues in a high-visibility executive-sponsored project, I strategically presented research results to position UX as a partner, not a blocker. I started by framing insights around shared business goals, then focused on actionable recommendations: piloting the tool, adjusting success metrics, emphasizing human-AI collaboration during training. This led stakeholders to embrace the UX team as a key partner in shaping responsive, effective AI products."
                }
            ]
        },
    ];

    function parseWithLineBreaks(input) {
        return input.split(',').map((part, index) => (
            <span key={index}>
            {part.trim()}
            <br />
            </span>
        ));
    }

    function formatCaption(caption) {
        return caption.split('|').map((part, index, arr) => (
            <React.Fragment key={index}>
            <span>{part.trim()}</span>
            {index < arr.length - 1 && (
                <span style={{ opacity: '0.4', margin: '1em' }}>|</span>
            )}
            </React.Fragment>
        ));
    }

    return (
        <div id="jpmc">
            <div className="text-white bg-img-gradient-hor"
                style={{'--bg-image': `url(${JPMCBG})`, height:"calc(100vh - 150px)", display:"flex", flexDirection: "column"}}
            >
                <div className="grid-container-condense" 
                    style={{marginTop: "25vh"}}
                >
                    <div className="centered-col-8 text-align-center">
                        <img className="logo" style={{height: "48px", filter: "brightness(0) invert(1)", objectFit: "contain"}} src={ JPMCLogo }></img>
                        <div className="spacer-32"/>
                        <h2 className="unbold">Designing <strong>trusted, AI-powered tools</strong> for specialists, product teams, and customers</h2>
                    </div>
                </div>
            </div>
            <div className="JPMC-disclaimer">
                <div className="col-12 text-align-center">
                    <small className="subdued ">Due to confidentiality agreements, the following highlights my process and contributions at a high level. Please reach out if you'd like to learn more.</small>
                </div>
            </div>
            {projects.map((project) => (
                <div className="bg-white">
                    <div className="grid-container">
                        <div className="col-2">
                            <div className="caption">Project {project.id}</div>
                        </div>
                        <div className="col-4" style={{transform: "translateY(-12px)"}}><h2>{project.title}</h2></div>
                        <div className="col-6">{project.contributions}</div>
                        
                        <div className="col-2" style={{marginTop: "auto"}}>
                            <ProjectDetails
                                role={parseWithLineBreaks(project.role)}
                                collaborators={parseWithLineBreaks(project.collaborators)}
                                timeframe={project.timeframe}
                                styleClass="condensed"
                            />
                        </div>
                        <div className="col-10">
                            <div className="JPMC-img-wrapper">
                                <img src={ project.projectImg }
                                    loading="lazy"
                                    decoding="async"
                                    className="JPMC-img-project">
                                </img>
                            </div>
                        </div>
                        <div className="col-2"/>
                        <div className="col-10">
                            <div className="spacer-16"/>
                            {project.takeaways.map((t, index) => (
                                <div key={index}>
                                    <TakeawayBlock
                                        title={t.title}
                                        body={t.body}
                                    />
                                    {index < project.takeaways.length - 1 && (
                                        <div className="spacer-64"></div>
                                    )}
                                </div> 
                            ))}
                        </div>
                    </div>
                    { (project.id < projects.length ) 
                        ? <div className="dotted-line"></div> : <></>
                    }
                </div>
            ))}
        </div>
    )
};

export default JPMC;