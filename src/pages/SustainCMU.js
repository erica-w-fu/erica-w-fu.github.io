import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import { NavLink } from 'react-router-dom';

import { projectProps } from '../components/data/Data.js';

import PainPoints from '../media/SustainCMUMedia/PainPoints.png';
import Prototype1 from '../media/SustainCMUMedia/Prototype1.png';
import Prototype2 from '../media/SustainCMUMedia/Prototype2.png';
import Prototype3 from '../media/SustainCMUMedia/Prototype3.png';

function SustainCMU() {

    const item = projectProps('SustainCMU');

	const scrollToDev = () => {
		window.scrollTo({top: 2000, behavior: 'smooth'});
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
                title="Problem Space"
            >
                <Sub 
                    header="How can we correct waste disposal habits on campus?"
                    body="CMU is investing more and more into sustainable waste management, such as making their dining materials almost 100% compostable. However, recycling and compost bins at CMU see high levels of contamination, and we have found that many students are unsure about how to sort their waste."
                />
                <Sub 
                    body="We interviewed Sustainable Earth (a sustainability student organization on campus), and the Green Practices manager, Deborah Steinberg. From those interviews, we deducted pain points and identified more specific How Can We's to focus on for the project."
                    img={ PainPoints }
                />
            </Section>
            <Section
                title="Solution"
            >
                <Sub
                    header="Informational and attention-grabbing signage"
                    body="Given that waste disposal is very dependent on environment, we decided to use signage to get students' attention at locations where students are thinking about waste disposal – such as dining halls and near trash bins, as well as locations where students might be more likely to read the information on posters – such as in elevators or bathrooms. We put up two different types of posters: the usual informational posters that serve as a reference at the waste bins, as well as a set of “surprising facts” posters that target common misconceptions that students may not be aware of."
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
                    body="Survey Quotes"
                    quotes="In the bathroom I’m forced to read the poster, so that seems to be effective./Information where you dispose of waste — and having all types of collection bins near each other — is probably best!/Locate posters at points where trash is disposed of, and where people tend to congregate to study and exit the study locations./There should be a website that is clear about how to dispose of waste."
                />
                <Sub 
                    body="We noticed that there was a big different between where students noticed the posters (where we got the highest volumne of responses, and where students would likely read information about waste disposal. Interestingly enough, locations where students were waiting (elevators, restrooms, and in line) were where we received the highest volume of responses, but locations near dining areas where were students reported that they would be interested in seeing waste disposal information."
                    list="We planned to place surprising fact posters (prototype 2) in elevators and restroom stalls/We planned to place informational posters (prototype 3) on tables, waste bins, and in line at dining locations"
                />
            </Section>
            <Section 
                title="Prototype 2"
            >
                <Sub 
                    header="How can we get people to notice the information?"
                    body="We created various posters with surprising facts about waste disposal. To test our prototypes, we showed posters to people within the CMU chapter of Design for America."
                    img={ Prototype2 }
                />
                <Sub 
                    body="Prototype 2 Insights"
                    list="Students enjoyed posters that had jokes relevant to the school/A lot of the facts were quite surprising to students, accomplishing out goal of changing students' mental model that they knew how to dispose of their waste"
                />
            </Section>
            <Section 
                title="Prototype 3"
            >
                <Sub 
                    header="How can get people to process and properly dispose waste?"
                    body="We created different informational posters that organize and highlight different information about waste disposal. Observing the limited signage on campus, we noticed that posters only showed what should be in each bin. We hypothesized that people would ignore the signs since they assumed that they already knew how to dispose of waste. Furthermore, the posters would often ignore ambiguities (such as only cups at certain locations may be compostable). Thus, we created a prototype that emphasized common misconceptions to call attention to any waste that the reader may be planning to incorrectly dispose."
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

            <div className="body-small">
                <hr></hr>
                <h2>Look at <NavLink to="/" onClick={scrollToDev}>more projects</NavLink>!
                </h2>
                <br></br>
            </div>
        </div>
    )
}

export default SustainCMU;