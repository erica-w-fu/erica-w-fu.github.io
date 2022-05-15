import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';

import { projectProps } from '../components/data/Data.js'

import demo from '../media/DevDemos/ThirtyDayDemo.mov';
import CompetitiveAnalysis from '../media/ThirtyDayMedia/CompetitiveAnalysis.png';
import FinalDesign from '../media/ThirtyDayMedia/FinalDesign.png';
import PrototypeMessaging from '../media/ThirtyDayMedia/PrototypeMessaging.png';
import PrototypeProfile from '../media/ThirtyDayMedia/PrototypeProfile.png';
import PrototypeTask from '../media/ThirtyDayMedia/PrototypeTask.png';
import Solution from '../media/ThirtyDayMedia/Solution.png';
import SpeedDating from '../media/ThirtyDayMedia/SpeedDating.png';
import SurveyInsights from '../media/ThirtyDayMedia/SurveyInsights.png';


function ThirtyDay() {

    const item = projectProps('ThirtyDayAdulting');

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
            />
            <Section 
                title="Problem Space"
            >
                <Sub 
                    header="How do we improve young adult’s adoption of cybersecurity tools?"
                    body="Young adults are seeking help online for how they can “get their life together,” but cybersecurity doesn't appear in any existing self-development guides. This is more surprising when you consider that roughly 2/3 of U.S. Internet users are estimated to have experienced data theft of some kind and over half of U.S. Internet users surveyed have expressed wanting to do more protect their online security and privacy.
                    Despite these sentiments, as well as attempts to raise the security sensitivity of the general populace, expert's advice on cybersecurity is largely ignored and general knowledge remains low."
                />
            </Section>
            <Section
                title="Solution"
            >
                <Sub 
                    header="30 Day Adulting app that embeds cybersecurity tasks with general adulting tasks"
                    body="By using theory of planned behavior, embedded design, and social influence principles, we hope to alter young adult's conception of “adulting,” such that it includes taking care of cybsecurity"
                    img={ Solution }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Research"
            >
                <Sub 
                    header="Survey"
                    body="To better understand our audience and their perceived needs we deployed an online survey on individual's conception of “adulting” (what constitutes as “adulting”, what do they think is important, what do they seek help with and from who?). We used the survey results to determine what types of tasks to populate the app with, and confirmed that taking care of cybersecurity is indeed something that young adults don't think of as “adulting”."
                    img={ SurveyInsights }
                />
                <Sub 
                    header="Competitive Analysis"
                    body="We collected examples of how existing apps implement use peer influence in order to sway users’ behavior, and identified the strengths and weaknesses of those approaches. Using this research as inspiration, we ideated potential features for social proof that could be integrated into the foundation of the app. "
                    img={ CompetitiveAnalysis }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Prototypes"
            >
                <Sub 
                    body="With those insights, we created various wireframes for three pages: a task page, a profile page, and a messaging page."
                />
                <Sub 
                    header="Task page"
                    body=" This main page displays three tasks that can be expanded for more details, marked as complete, and starred."
                    img={ PrototypeTask }
                    imgType="wide"
                />
                <Sub 
                    header="Profile page"
                    body="Since users want to see and share each others' progress with their accountability buddies, we ideated how a profile page with statistics and past tasks could effectively be displayed. Also, we created a saved tasks section so that users can save resources to easily reference later."
                    img={ PrototypeProfile }
                    imgType="wide"
                />
                <Sub 
                    header="Messaging page"
                    body="To further encourage communication and support between accountability buddies, we ideated how a messaging page could incorporate quick ways to remind others to do tasks, share resources, and more."
                    img={ PrototypeMessaging }
                    imgType="wide"
                />
            </Section>
            <Section
                title="Testing Prototypes"
            >
                <Sub 
                    header="Speed Dating"
                    body="To narrow down the feature ideas to be implemented in the app and study, we recruited 10 young adults to take place in a speed dating session.  For the speed dating session, we asked participants to provide feedback on 10 of our social proof feature ideas, and at the end had them rank each idea from most to least desirable."
                    img={ SpeedDating }
                />
            </Section>
            <Section 
                title="Final Design"
            >
                <Sub 
                    body="For the final version of the app, we focused our efforts on refining the aesthetic of the app such that it resonates with young adults. 
                    Drawing on imagery from childhood (like stick figures, paper airplanes, and scribbles) the quirky and fun design of the characters, combined with the minialist design of the rest of the app parallels the feeling of transitioning into adulthood. Emphasizing the desire to “have your life together”, while still not feeling entirely grown-up."
                    img={ FinalDesign}
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Next Steps"
            >
                <Sub 
                    header="iOS Development"
                    body="As a UX Designer and Lead Developer for the team, I will implement all of the designs and publish the application to the Apple Store. Below is the latest video demo."
                />
                <video width="30%" controls >
                    <source src={demo} type="video/mp4"/>
                </video>
            </Section>
        </div>
    )
}

export default ThirtyDay;