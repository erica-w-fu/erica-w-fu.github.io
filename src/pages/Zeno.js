import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js'

import Solution from '../media/ZenoMedia/Solution.png';
import UserFlow from '../media/ZenoMedia/UserFlow.png';
import Redesign from '../media/ZenoMedia/Redesign.png';
import Wireframes from '../media/ZenoMedia/Wireframes.png';
import FinalDesign from '../media/ZenoMedia/FinalDesign.png';


function Zeno() {

    const item = projectProps('Zeno');
    const next = projectProps('Adulting');

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
                    header="How can we evaluate machine learning models in a way that prevents bias?"
                    body="Machine learning models are being deployed to a growing number of real-world domains, from healthcare to
                    self-driving cars. While modern ML systems have shown promising performance, they can still encode problematic
                    patterns, for example, basic grammatical failures, biases against people of color, and systematic disparities in
                    clinical diagnoses. Detecting and fixing these specific issues, often termed behavioral testing or evaluation, requires going beyond calculating aggregate metrics such as accuracy and F1 score and understanding specific patterns of model
                    behavior."
                />
            </Section>
            <Section
                title="Our Solution"
            >
                <Sub 
                    header="An behavioral evaluation API and interactive model exploration interface"
                    body="Given the limitations and low adoption of any machine learning evaluation tools, Zeno focuses on flexibility to ensure that people with any level of machine learning knowledge are able to use the tool for any type of data. 
                    Combining an API for all types of models, metadata, and functions with an interactive user interface to explore model performance on slices of data, Zeno allows all teams that help develop and maintain machine learning models to easily identify issues, create reports to present to different stakeholders, and select the best model to deploy."
                    img={ Solution }
                />
            </Section>
            <Section 
                title="Research"
            >
                <Sub 
                    header="Interviews"
                    body="To better understand how current practitioners evaluate their models and the challenges that they face. We conducted 18 semi-structured interviews through convenience sampling, posts on social media networks, and cold-emailing."
                    quotes="Primary part of evaluation is discovering what use cases the algorithm is not behaving properly/Models can perform very well on a training dataset, but when you go to ship the product it doesn’t work nearly as well/We Switched voice-to-text service from Google to Amazon because Google stopped detecting filler words like 'um'/Customers file a ticket online, then customer service people will try to replicate it"
                />
                <Sub
                    body="Interview Insights"
                    list="Testing models on training data is not representative of how a model will perform on data in real world use cases
                    /Many practitioners rely on external AI services, but they don't have a way to test which services are best for their use
                    /Customer service people who read feedback from end users cannot tell whether their issues are systematic or whether customers are facing noisy data, misuse of models, or other personal issues"
                />
            </Section>
            <Section 
                title="Designing the experience"
            >
                <Sub 
                    header="User Flow"
                    body="When I entered the project, people were all working on parts of the project (Zeno hub, Discovery, Exploration). I collaborated with each team member to clarify the significance of their work and piece together how their work fit into the whole user flow of Zeno."
                    img={ UserFlow }
                />
            </Section>
            <Section
                title="Redesigning the Exploration Interface"
            >
                <Sub 
                    header="Evaluating past designs"
                    body="Looking at the Exploration interface that was starting to be implemented, I observed that there were a lot of ways people could interact with the interface, but the main purpose of the interactions was unclear. Thus, I identified a few key interactions needed to make our design successful."
                    img={ Redesign }
                    list="Users should see how models perform with each slice/Users should by guided to certain slices that they might not have thought of/Users should clearly know what they selected across metadata, outputs, and other slices"
                />
                <Sub 
                    body="From low fidelity to high fidelity"
                    img={ Wireframes}
                />
            </Section>
            <Section 
                title="Final Design"
            >
                <Sub 
                    header="A model evaluation tool for any user"
                    body="For the final version of the interface, we focused on using color more intentionally, highlighting the key actions through purple while maintaining a relatively monochromatic color scheme for everything else. We also wanted to make the data visualizations very usable, utilizing distributions and chips that are easy to understand and manipulate."
                    img={ FinalDesign }
                />
            </Section>
            <Section 
                title="Next Steps"
            >
                <Sub 
                    header="Remote User Testing"
                    body="We currently have a few practioners who are using their own data and projects on Zeno. We will use their insights to improve Zeno and also show how behavioral evaluation can break down barriers of machine learning by allowing people to understand their models and data."
                />
            </Section>
            
            <div className="body">
                <br></br>
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

export default Zeno;