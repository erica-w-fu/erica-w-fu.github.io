import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js';

import DeskResearch from '../media/TripPicMedia/DeskResearch.png';
import SurveyResults from '../media/TripPicMedia/SurveyResults.png';
import AffinityDiagram from '../media/TripPicMedia/AffinityDiagram.png';
import ThinkAloudInsights from '../media/TripPicMedia/ThinkAloudInsights.png';
import UserFlow from '../media/TripPicMedia/UserFlow.png'
import Crazy8s from '../media/TripPicMedia/Crazy8s.png'
import Storyboards from '../media/TripPicMedia/Storyboards.png'
import FinalDesign from '../media/TripPicMedia/FinalDesign.png'
import FinalDesignFlow from '../media/TripPicMedia/FinalDesignFlow.png'

function TripPic() {

    const item = projectProps('TripPic');
    const next = projectProps('SustainCMU');

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
                title="My role on the team"
            >
                <Sub 
                    header="The lead Researcher"
                    body="This team was composed of one designer, one software developer, and me. Given my knowledge of research methods from HCI research and teaching the human-centered design process in Design for America, I took on the role of the lead researcher. I led the team when creating research protocols, conducting interviews, and extracting insights."
                />
            </Section>
            <Section 
                title="Problem Space"
            >
                <Sub 
                    header="How might we help young tech-savvy travelers discover travel experiences from sources they trust?"
                    body="Travel planning is often a tedious task that involves looking through hundreds of pages, reviews, images, articles, blog posts, forum posts, and more. For young, tech savvy users, booking flights and lodging are often within their comfort zone, however finding experiences that match their preferences out of the wide variety of sources and consolidating those experiences into an established plan can be a challenge."
                />
            </Section>
            <Section 
                title="Desk Research"
            >
                <Sub 
                    header="Understanding the current state of travel planning"
                    body="We looked through various travel planning guides from blogs and websites to understand how people suggest making travel plans. We also conducted a comparative analysis by looking at various online resources for travel planning."
                    img={ DeskResearch }
                />
            </Section>
            <Section 
                title="User Research"
            >
                <Sub 
                    header="Surveys"
                    body="We conducted a survey to get a breadth of responses from various people and understand the depth of potential challenges we assumed travel planners had from our desk research"
                    img={ SurveyResults }
                />
                <Sub 
                    body="Most notably, we found that most young tech-saavy travelers utilize a list while travel plannning to keep track of various disjoint locations. The places on the list are all potential places the travel planner may be interested in, but are not necessarily final destinations that they plan to go to."
                />
                <Sub 
                    header="Think Aloud Interviews"
                    body="We conducted think aloud interviews to observe how young tech-savvy travelers plan for a trip to an unfamiliar destination. By asking users to demonstrate how they would plan for a trip to an unfamiliar destinations they are interested in, we found what tools and behaviors people typically employ when travel planning and where we can make the process easier."
                    quotes="I always look for photos of attractions since I can quickly get a sense of the place and determine if it matches what I would like./If I am planning to travel to an unfamiliar destination, I always start by asking friends who have been there before for suggestions of places to go because I can trust their opinions more than strangers online./Before going on the trip I create a scheduled itinerary so we don’t have to spend time during the trip scrambling to decide where to go."
                />
            </Section>
            <Section 
                title="Modeling and Synthesis"
            >
                <Sub 
                    header="Affinity Diagramming"
                    body="We broke down each interview into interpretation notes and clustered those notes together to discover insights."
                    img={ AffinityDiagram }
                />
                <Sub
                    body="Affinity Diagram Insights"
                    img={ ThinkAloudInsights }
                />
                <Sub
                    header="User Flow"
                    body="We created a user flow based on our research to visually map out the process users take when travel planning. Using this user flow, we discussed different pain points a user might have along this journey to motivate our ideation."
                    img={ UserFlow }
                />
            </Section>
            <Section 
                title="Coming up with a variety of ideas"
            >
                <Sub 
                    header="Crazy 8's"
                    body="As a team, we all did Crazy 8's to get some ideas flowing and generate a wide variety of ideas. Below is just my Crazy 8's ideation."
                    img={ Crazy8s }
                />
                <Sub 
                    header="Storyboards"
                    body="We also created three storyboards each based on a specific user needs."
                    list="Organizing travel plans by location
                    /Using visuals when travel planning
                    /Find individual travel itinerary items"
                />
                <Sub 
                    body="Based on a specific user need, we generated three storyboards of different risk to get a variety of ideas. We considered how much the user would have to trust our design to ideate solutions that users may be familiar with already and solutions that are completely unfamiliar."
                    img={ Storyboards }
                />
            </Section>
            <Section 
                title="Prototype Testing and Revising"
            >
                <Sub 
                    header="Speed Dating"
                    body="To quickly test our initial ideas, we conducted speed dating sessions to determine characteristics that participants commonly liked and disliked from our 9 different storyboards. Through this, we were easily able to narrow down our ideas to one final solution."
                    img={ FinalDesign }
                />
                <Sub 
                    header="Concept Model"
                    body="Our final design takes form of a concept model. From our speed dating sessions, we found that people liked different ideas based on what part of the travel planning stage they are at (whether they don't know where they want to travel, have some ideas, or are ready to go on a trip. Based on the stage people are at, they would want different ways of finding where to go, whether that be through photos from friends or proximity. Since many participants from speed dating mentioned that they found the scheduling of disjoint locations tedious, our solution would be able to take disjoint locations and conveniently create a concrete schedule. For the final design, we really focused on using our research to guide our final model."
                    img={ FinalDesignFlow }
                />
            </Section>
            <div className="body-media">
                <hr></hr>
                <h2>View another project!</h2>
                <br></br>
                <Card 
                    key={ next.Component }
                    component={ next.Component }
                    title={ next.Title }
                    highlight={ next.Highlight }
                    tags={ next.Tags }
                />
            </div>
        </div>
    )
}

export default TripPic;