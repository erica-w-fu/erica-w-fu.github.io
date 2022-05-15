import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';

import { projectProps } from '../components/data/Data.js';

import ThinkAloudQuotes from '../media/TripPicMedia/ThinkAloudQuotes.png';
import AffinityDiagram from '../media/TripPicMedia/AffinityDiagram.png';
import Insights from '../media/TripPicMedia/Insights.png';
import CustomerJourneyMap from '../media/TripPicMedia/CustomerJourneyMap.png';
import UserFlow from '../media/TripPicMedia/UserFlow.png'
import Crazy8s from '../media/TripPicMedia/Crazy8s.png'
import SpeedDating from '../media/TripPicMedia/SpeedDating.png'
import Solution from '../media/TripPicMedia/Solution.png'
import ConceptModel from '../media/TripPicMedia/ConceptModel.png'
import Wireframes from '../media/TripPicMedia/Wireframes.png'
import Poster from '../media/TripPicMedia/Poster.png'

function TripPic() {

    const item = projectProps('TripPic');

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
                title="Project Overview"
            >
                <Sub 
                    img={ Poster }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Problem Space"
            >
                <Sub 
                    header="How might we help young tech-savvy travelers quickly and easily discover travel experiences from sources that they trust and conveniently consolidate those experiences into an efficient, concrete schedule?"
                    body="Given that there are so many different sources of information when traveling, it is often difficult to pinpoint what is reliable and desirable. We chose to further investigate how tech savvy travelers plan for unknown destinations and how we can bring the most enjoyable experience to the often tedious process of finding and organizing itineraries."
                />
            </Section>
            <Section 
                title="Contextual Research and Analysis"
            >
                <Sub 
                    header="Think Aloud Interviews"
                    body="We conducted think aloud interviews to observe how young tech-savvy travelers plan for a trip to an unfamiliar destination. By asking users to demonstrate how they would plan for a trip to an unfamiliar destinations they are interested in, we found what tools and behaviors people typically employ when travel planning and where we can make the process easier."
                />
                <Sub 
                    header="Quotes and Evidence"
                    img={ ThinkAloudQuotes }
                    imgType="wide"
                />
                <Sub 
                    header="Affinity Diagramming"
                    body="We broke down each interview into interpretation notes and clustered those notes together to discover insights."
                    img={ AffinityDiagram }
                />
                <Sub 
                    header="Insights"
                    img={ Insights }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Synthesis and Modeling"
            >
                <Sub 
                    header="Customer Journey Map"
                    body="We created a customer journey map based on our interviews. From our persona, Jane Doe, a 20 year old college student who loves traveling to museums, we imagined a journey map she would go through to plan for a solo vacation to Italy."
                    img={ CustomerJourneyMap }
                    imgType="wide"
                />
                <Sub 
                    header="User Flow"
                    body="We also created a user flow for a potential application that matched the current travel planning behavior of users. Since we found that young tech-savvy travelers have little problem finding disjoint attractions, lodging, and flights, the application allows users to easily input those bookings and lists of attractions. However, users revealed that taking those scattered lists and creating a concrete schedule was often tedious, thus our app can take all of those inputs and traveling preferences to generate a travel schedule for the user."
                    img={ UserFlow }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Ideating"
            >
                <Sub 
                    header="Crazy 8's"
                    body="We quickly generated eight unique ideas to explore different potential solutions based on our research."
                    img={ Crazy8s }
                    imgType="wide"
                />
                <Sub 
                    header="Speed Dating"
                    body="We also generated and tested 9 different storyboards (some pictured below) based on user needs from our research and featuring different designs to see what people actually found useful."
                    img={ SpeedDating }
                    imgType="wide"
                />
            </Section>
            <Section 
                title="Solution"
            >
                <Sub 
                    header="Traveling itinerary curator and scheduler"
                    body="Our final solution is focused on connecting the searching process of disjoint attractions, food, and experiences with the schedule creating process of connecting those itinerary items into a concrete schedule."
                    img={ Solution }
                    imgType="wide"
                />
                <Sub 
                    header="Concept Model"
                    body="We created a concept model to illustrate how a user could go through all the features: making a profile with travel preferences, finding itinerary items based on location, viewing where friends have traveled to, and generating a trip to a location with the saved posts and added in logistical info – such as flights and lodging."
                    img={ ConceptModel }
                />
                <Sub 
                    header="Wireframes"
                    body="We created some wireframes to demonstrate how a user may discover new travel items nearby to places they already want to travel to. For example, in the wireframe below, a user has decided that they want to find dessert near the Eiffel Tower."
                    img={ Wireframes }
                />
            </Section>
        </div>
    )
}

export default TripPic;