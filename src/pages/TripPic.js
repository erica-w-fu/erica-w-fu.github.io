import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js';

import AffinityDiagram from '../media/TripPicMedia/AffinityDiagram.png';
import Insights from '../media/TripPicMedia/Insights.png';
import CustomerJourneyMap from '../media/TripPicMedia/CustomerJourneyMap.png';
import UserFlow from '../media/TripPicMedia/UserFlow.png'
import Crazy8s from '../media/TripPicMedia/Crazy8s.png'
import SpeedDating from '../media/TripPicMedia/SpeedDating.png'
import Solution from '../media/TripPicMedia/Solution.png'
import ConceptModel from '../media/TripPicMedia/ConceptModel.png'

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
                title="Problem Space"
            >
                <Sub 
                    header="How might we help young tech-savvy travelers discover travel experiences from sources they trust?"
                    body="Travel planning is often a tedious task that involves looking through hundreds of pages, reviews, images, articles, blog posts, forum posts, and more. For young, tech savvy users, booking flights and lodging are often within their comfort zone, however finding experiences that match their preferences out of the wide variety of sources and consolidating those experiences into an established plan can be a challenge."
                />
            </Section>
            <Section 
                title="Contextual Research and Analysis"
            >
                <Sub 
                    header="Think Aloud Interviews"
                    body="We conducted think aloud interviews to observe how young tech-savvy travelers plan for a trip to an unfamiliar destination. By asking users to demonstrate how they would plan for a trip to an unfamiliar destinations they are interested in, we found what tools and behaviors people typically employ when travel planning and where we can make the process easier."
                    quotes="I always look for photos of attractions since I can quickly get a sense of the place and determine if it matches what I would like./If I am planning to travel to an unfamiliar destination, I always start by asking friends who have been there before for suggestions of places to go because I can trust their opinions more than strangers online./Before going on the trip I create a scheduled itinerary so we don’t have to spend time during the trip scrambling to decide where to go."
                />
                <Sub 
                    header="Affinity Diagramming"
                    body="We broke down each interview into interpretation notes and clustered those notes together to discover insights."
                    img={ AffinityDiagram }
                />
                <Sub
                    body="Affinity Diagram Insights"
                    img={ Insights }
                />
            </Section>
            <Section 
                title="Synthesis and Modeling"
            >
                <Sub 
                    header="Customer Journey Map"
                    body="We created a customer journey map based on our interviews. From our persona, Jane Doe, a 20 year old college student who loves traveling to museums, we imagined a journey map she would go through to plan for a solo vacation to Italy."
                    img={ CustomerJourneyMap }
                />
                <Sub 
                    header="User Flow"
                    body="We also created a user flow for a potential application that matched the current travel planning behavior of users. Since we found that young tech-savvy travelers have little problem finding disjoint attractions, lodging, and flights, the application allows users to easily input those bookings and lists of attractions. However, users revealed that taking those scattered lists and creating a concrete schedule was often tedious, thus our app can take all of those inputs and traveling preferences to generate a travel schedule for the user."
                    img={ UserFlow }
                />
            </Section>
            <Section 
                title="Ideating"
            >
                <Sub 
                    header="Crazy 8's"
                    body="Focusing on how the different insights we discovered from affinity diagramming, the pain points from customer journey mapping, and inspired by our hypothetical user flow, we quickly generated eight unique ideas to explore different potential solutions."
                    img={ Crazy8s }
                />
                <Sub 
                    header="Speed Dating"
                    body="We also generated and tested 9 different storyboards (some pictured below) based on user needs from our research and featuring different designs to see what people actually found useful. While creating these storyboards, we focused on differing the levels of risk so that the solutions would be of a wider variety."
                    img={ SpeedDating }
                />
                <Sub
                    body="After interviewing three young, tech-savvy people, we identified characteristics that the partipants enjoyed to guide the design of our solution. Overall, people valued connecting the searching process of disjoint attractions, food, and experiences with the schedule creating process of connecting those itinerary items into a concrete schedule."
                    img={ Solution }
                />
            </Section>
            <Section 
                title="Solution"
            >
                <Sub 
                    header="Traveling itinerary curator and scheduler"
                    body="We created a concept model to illustrate how a user could go through all the features: making a profile with travel preferences, finding itinerary items based on location, viewing where friends have traveled to, and generating a trip to a location with the saved posts and added in logistical info – such as flights and lodging."
                    img={ ConceptModel }
                />
            </Section>

            <div className="body">
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