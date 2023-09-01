import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import { NavLink } from 'react-router-dom';


import { projectProps } from '../components/data/Data.js'

import demo from '../media/DevDemos/ThirtyDayDemo.mov';
import CompetitiveAnalysis from '../media/ThirtyDayMedia/CompetitiveAnalysis.png';
import FinalDesign from '../media/ThirtyDayMedia/FinalDesign.png';
import Prototypes from '../media/ThirtyDayMedia/Prototypes.png';
import Solution from '../media/ThirtyDayMedia/Solution.png';


function Adulting() {

    const item = projectProps('Adulting');

    const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

    return (
        <div className="body page-body">
            <Intro
                key={ item.Component }
                component={ item.Component }
                title={ item.Title }
                highlight={ item.Highlight }
                tags={ item.Tags }
                dates={ item.Dates }
                summary={ item.Summary }
                link={ item.Link }
                linkTitle={ item.LinkTitle }
                responsibilities={ item.Responsibilities }
                tools={ item.Tools }
                team={ item.Team }
                timeline={ item.Timeline }
            />
            <Section 
                title="The Problem"
            >
                <Sub 
                    header="How do we improve young adult’s adoption of cybersecurity tools?"
                    body="Young adults are seeking help online for how they can “get their life together,” but cybersecurity doesn't appear in any existing self-development guides. This is more surprising when you consider that roughly 2/3 of U.S. Internet users are estimated to have experienced data theft of some kind and over half of U.S. Internet users surveyed have expressed wanting to do more protect their online security and privacy.
                    Despite these sentiments, as well as attempts to raise the security sensitivity of the general populace, expert's advice on cybersecurity is largely ignored and general knowledge remains low."
                />
            </Section>
            <Section
                title="Our Solution"
            >
                <Sub 
                    header="Adulting 101 app that embeds cybersecurity tasks with general adulting tasks"
                    body="By using theory of planned behavior, embedded design, and social influence principles, we hope to alter young adult's conception of “adulting,” such that it includes taking care of cybersecurity"
                    img={ Solution }
                />
            </Section>
            <Section 
                title="Research"
            >
                <Sub 
                    header="Survey"
                    body="To better understand our audience and their perceived needs we deployed an online survey on individual's conception of “adulting” (what constitutes as “adulting”, what do they think is important, what do they seek help with and from who?). We used the survey results to determine what types of tasks to populate the app with, and confirmed that taking care of cybersecurity is indeed something that young adults don't think of as “adulting”."
                />
                <Sub
                    body="Survey Insights"
                    list="Cybersecurity is not a part of young adult's current mental model of adulting/The vast majority of young adults surveyed were concerned about adulting/Many young adults feel lost and don't know where to begin with adulting"
                />
                <Sub 
                    header="Competitive Analysis"
                    body="We collected examples of how existing apps implement use peer influence in order to sway users’ behavior, and identified the strengths and weaknesses of those approaches. Using this research as inspiration, we ideated potential features for social proof that could be integrated into the foundation of the app. "
                    img={ CompetitiveAnalysis }
                />
            </Section>
            <Section 
                title="Prototypes"
            >
                <Sub 
                    header="Wireframing"
                    body="With those insights, we created various wireframes for three pages: a task page, a profile page, and a messaging page. In wireframes, we incorporated the theory of social influence, considering of how a peers could encourage each other to complete the challenge."
                    img={ Prototypes }
                />
            </Section>
            <Section
                title="Testing Prototypes"
            >
                <Sub 
                    header="Speed Dating"
                    body="To narrow down the feature ideas to be implemented in the app and study, we recruited 10 young adults to take place in a speed dating session.  For the speed dating session, we asked participants to provide feedback on 10 of our social proof feature ideas, and at the end had them rank each idea from most to least desirable."
                />
                <Sub 
                    body="Speed Dating Insights"
                    list="Doing the adulting challenge with a buddy made participants more excited to complete and collaborate on tasks/Participants wanted to see other peoples' progress and share their progress with others/Participants did not enjoy receiving many notifications since it seemed tedious and annoying"
                />
            </Section>
            <Section 
                title="Final Design"
            >
                <Sub 
                    header="A Fun and Playful Way to Learn How to Adult"
                    body="For the final version of the app, we focused our efforts on refining the aesthetic of the app such that it resonates with young adults. 
                    Drawing on imagery from childhood (like stick figures, paper airplanes, and scribbles) the quirky and fun design of the characters, combined with the minialist design of the rest of the app parallels the feeling of transitioning into adulthood. Emphasizing the desire to “have your life together”, while still not feeling entirely grown-up."
                    img={ FinalDesign }
                />
            </Section>
            <div className="row">
                <div className="col">
                    <Section 
                        title="Next Steps"
                    >
                        <Sub 
                            header="iOS Development"
                            body="As the main Developer for the team at the time, I implemented a lot of the design. When I took on more design roles, this experience helped me understand the needs of a developer and work more efficiently with them."
                        />
                    </Section>
                </div>
                <div className="col project-video">
                    <video width="100%" controls >
                        <source src={demo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            
            <div className="body-small">
                <hr></hr>
                <h2>That's all for the UX design projects. Check out my <NavLink to="/Developer" onClick={scrollToTop}>front-end/full-stack development projects</NavLink>!
                </h2>
                <br></br>
            </div>
        </div>
    )
}

export default Adulting;