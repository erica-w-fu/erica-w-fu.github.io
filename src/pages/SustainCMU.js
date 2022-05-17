import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import { NavLink } from 'react-router-dom';

import { projectProps } from '../components/data/Data.js';

import PainPoints from '../media/SustainCMUMedia/PainPoints.png';
import Poster from '../media/SustainCMUMedia/Poster.png';
import Prototype1 from '../media/SustainCMUMedia/Prototype1.png';
import Prototype1Insights from '../media/SustainCMUMedia/Prototype1Insights.png';
import Prototype1Quotes from '../media/SustainCMUMedia/Prototype1Quotes.png';
import Prototype2 from '../media/SustainCMUMedia/Prototype2.png';
import Prototype3 from '../media/SustainCMUMedia/Prototype3.png';

function SustainCMU() {

    const item = projectProps('SustainCMU');

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
                    header="How can we correct waste disposal habits on campus?"
                    body="CMU is investing more and more into sustainable waste management, such as making their dining materials almost 100% compostable. However, recycling and compost bins at CMU see high levels of contamination, and we have found that many students are unsure about how to sort their waste."
                />
                <Sub 
                    header="Pain Points"
                    img={ PainPoints }
                />
            </Section>
            <Section
                title="Solution"
            >
                <Sub
                    header="Informational and attention-grabbing signage"
                    body="We plan to put up two different types of posters: the usual informational posters that serve as a reference at the waste bins, as well as a set of “surprising facts” posters that target common misconceptions"
                />
            </Section>
            <Section 
                title="Prototype 1"
            >
                <Sub 
                    header="Where would people notice our signage?"
                    body="We put up the poster shown below to determine the locations that students would be the most willing to engage with our posters. By using QR codes, we discovered where students are able to notice and interact with signage."
                    img={ Prototype1 }
                />
                <Sub 
                    header="Quotes"
                    img={ Prototype1Quotes }
                />
                <Sub 
                    header="Insights"
                    body="With the survey results, we determined the most optimal location to place our two types of posters. We observed that there were two types of locations: ones that gained the most survey responses (since they were often at places where people had to stay and wait) and other ones where people were more willing to read information about waste disposal (often places where people expect to see that type of information)."
                    img={ Prototype1Insights }
                />
            </Section>
            <Section 
                title="Prototype 2"
            >
                <Sub 
                    header="How can we get people to notice the information?"
                    body="We created various posters with surprising facts about waste disposal."
                    img={ Prototype2 }
                />
                <Sub 
                    header="Insights"
                    body="We put up surprising fact posters in bathroom stalls and elevators and found that students liked and noticed posters that had jokes relevant to the school."
                />
            </Section>
            <Section 
                title="Prototype 3"
            >
                <Sub 
                    header="How can get people to process and properly dispose waste?"
                    body="We created different informational posters that organize and highlight different information about waste disposal. Given that there is some existing signage on campus, we evaluated what could be improved about the current signage. Given that the current signage only shows what should be in each bin, we hypothesized that people would ignore the signs since they assumes that they already knew how to dispose of waste. Furthermore, the posters would often ignore ambiguities (such as only cups at certain locations may be compostable). Thus, we decided to create one prototyped that organized the information by category to make the reader reflect on what object they have in hand, and another prototype that emphasized common misconceptions to call attention to any waste that the reader may be planning to incorrectly dispose of."
                    img={ Prototype3 }
                />
            </Section>
            <Section 
                title="Next Steps"
            >
                <Sub 
                    header="Testing Prototype 3"
                    body="We will A/B test the three different posters to determine which is the most effective. We are planning to present different waste objects and ask people to identify which bin to place the items in with a specific poster."
                />
                <Sub 
                    header="Evaluating Effectiveness"
                    body="We will collaborate with CMU staff to look through the trash to calculate contaimination levels at each dining location and evaluate the effectiveness of our signage."
                />
            </Section>

            <hr></hr>
            <h2>Learn more <NavLink to="/About" onClick={scrollToTop}>about me</NavLink> :&#41;
            </h2>
            <br></br>
        </div>
    )
}

export default SustainCMU;