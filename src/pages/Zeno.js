import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js'

import Solution from '../media/ZenoMedia/Solution.png';
import UserFlow from '../media/ZenoMedia/UserFlow.png';
import ThematicAnalysis from '../media/ZenoMedia/ThematicAnalysis.png';
import OldDesign from '../media/ZenoMedia/OldDesign.png';
import DesignInspo from '../media/ZenoMedia/DesignInspo.png';
import LowFidelity from '../media/ZenoMedia/LowFidelity.png';
import HighFidelity from '../media/ZenoMedia/HighFidelity.png';
import TestingColors from '../media/ZenoMedia/TestingColors.png';
import HighFidelityRedesign from '../media/ZenoMedia/HighFidelityRedesign.png';
import PractionerTesting from '../media/ZenoMedia/PractionerTesting.png';
import Wireframes from '../media/ZenoMedia/Wireframes.png';



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
                title="My role on the team"
            >
                <Sub 
                    header="The only UX Designer in a very technical team"
                    body="I am the only UX designer on the team of programmers for Zeno. All the UX work is done by me, and I coordinate with developers to understand their goals, occasionally inquire how they help our users, and give them clear directions on what to develop through flows or wireframes. The developers on the team are very passionate about the project and good at what they do, so it is really fun to work with them."
                />
            </Section>
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
                    header="A behavioral evaluation API and interactive model exploration interface"
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
                    body="When I entered the project, the project had already conducted their formative study interviews. To better understand how current practitioners evaluate their models and the challenges that they face. We conducted 18 semi-structured interviews through convenience sampling, posts on social media networks, and cold-emailing."
                    quotes="Primary part of evaluation is discovering what use cases the algorithm is not behaving properly/Models can perform very well on a training dataset, but when you go to ship the product it doesn’t work nearly as well/We Switched voice-to-text service from Google to Amazon because Google stopped detecting filler words like 'um'/Customers file a ticket online, then customer service people will try to replicate it"
                />
                <Sub 
                    header="Thematic Analysis"
                    body="Although I was unable to take part in the interview process, I looked through all interpretation notes to find themes. Using Affinity Diagraming, we worked to connect experiences from different participants and discover common unmet user needs."
                    img={ ThematicAnalysis }
                />
                <Sub
                    body="We extracted three main user needs"
                    list="Testing models on training data is not representative of how a model will perform on data in real world use cases, instead slices are used to ensure good performance on specific types of data
                    /Many practitioners rely on external AI services, but they don't have a way to test which services are best for their use
                    /Customer service people who read feedback from end users cannot tell whether their issues are systematic or whether customers are facing noisy data, misuse of models, or other personal issues"
                />
            </Section>
            <Section 
                title="The Previous Design"
            >
                <Sub 
                    header="Evaluating the intentions of the previous design"
                    body="When I joined the project, there were already some preliminary designs for the Exploration page. The purpose of this page was to give users the ability to create slices (subsets of data) and guide users to slices they would want to track. These slices may include poorly performing slices or use case based slices.
                    I started by evaluating the old designs, asking the team member who made the previous designs about their intentions for certain design decisions and potential opportunities within the current design."
                    img={ OldDesign }                
                />
                <Sub
                    body="I ended up with three main How Can We's to guide my designs"
                    list="How can we allow users who do not have technical knowledge to create slices?
                    /How can we guide users to find poorly performing slices and important slices?
                    /How can we give users the ability to contextualize their data and understand how their data is distributed?"
                />
            </Section>
            <Section 
                title="Designing the experience"
            >
                <Sub 
                    header="Getting inspiration from online shopping"
                    body="Since there is no slice-based analysis interface, there was not any interfaces I could conduct a comparative analysis on. However, I realized that slices are just data focused filtering. Thus, I turned to online shopping and observed how they allowed users to easy filter through thousands of items. I also looked at other sorting and filtering interfaces."
                    img={ DesignInspo }
                />
                <Sub 
                    header="Low Fidelity Designs"
                    body="My team and I started with low fidelity designs, considering how users could make slices, incorporating feedback and feedforward so the user easily understand what metadata and slices are selected. Inspired by the online shopping interfaces, I incorporated chips for each selected metadata or slice."
                    img={ LowFidelity }
                />
            </Section>
            <Section
                title="Fleshing out the designs"
            >
                <Sub 
                    header="High Fidelity Prototypes"
                    body="Using Figma, I prototyped the low fidelity wireframes to show what the interface could look like. Since there was a lot of information on one screen, it was a challenge to display all the information. However, I worked through many iterations and optimized the space, using common region to group the control area and the sliced area."
                    img={ HighFidelity }
                />
                <Sub 
                    body="From low fidelity to high fidelity"
                    img={ Wireframes}
                />
            </Section>
            <Section 
                title="Redesign"
            >
                <Sub 
                    header="Using color more consciously"
                    body="From conducting informal user tests, we found that the high contrast in colors were distracting, especially with the high volume of information on the whole interface. I experiemented with many color combinations and considering how to emphasize the main purpose of the interface, to create slices, through color."
                    img={ TestingColors }
                />
                <Sub
                    body="The team decided on a warm gray and purple palette. The warm gray separates the navbar, control panel, and data view. The purple is used to highlight anything that is related to the current slice selection: slices and metadata that are selected on the left side and chips that describe the slice on the right side."
                    img={ HighFidelityRedesign }
                />
            </Section>
            <Section 
                title="Beyond the Exploration Page"
            >
                <Sub 
                    header="Designing the Experience"
                    body="In this case study, I primarily focused on the Explore page of Zeno. However, Zeno has many other components that all work together to allow people to use an API to write complex functions and export reports to show to other stakeholders. I designed the user flow to show how all the different components of Zeno work together, as well as different interfaces that have not been implemented yet."
                    img={ UserFlow }
                />
            </Section>
            <Section 
                title="Next Steps"
            >
                <Sub 
                    header="Remote User Testing"
                    body="We currently have a few practioners who are using their own data and projects on Zeno. We will use their insights to improve Zeno and also show how behavioral evaluation can break down barriers of machine learning by allowing people to understand their models and data."
                    img={ PractionerTesting }
                />
            </Section>
                        {/* <Section 
                title="Final Design"
            >
                <Sub 
                    header="A model evaluation tool for any user"
                    body="For the final version of the interface, we focused on using color more intentionally, highlighting the key actions through purple while maintaining a relatively monochromatic color scheme for everything else. We also wanted to make the data visualizations very usable, utilizing distributions and chips that are easy to understand and manipulate."
                />
                <Sub
                    body="Users can discover functions and weak labelers to analyze their data through a collaborative hub and an interactive U-map."
                    img={ FinalDesignDiscover }
                />
                <Sub
                    body="Users can create slices by filtering data and looking through suggested slices."
                    img={ FinalDesignExplore }
                />
                <Sub
                    body="Users can analyze the performance on different slices across models that are developed over time, or across other slices in a matrix."
                    img={ FinalDesignReport }
                />
            </Section> */}
            {/* <Section 
                title="Remote User Testing"
            >
                <Sub 
                    header="UI Classification using a CNN-based deep learning model"
                    body="The goal of the model is to make UIs more accessible to people with visual impairments by informing them of the type of interface they are looking at.
                    The practioner had hypothesis about which interfaces would be harder to identify and was able to test those hypothesis through Zeno. 
                    For example, login screens sometimes use list structures, which may lead to a model misidentifying a login screen as a list interface."
                    
                />
            </Section> */}
            
            <div className="body-media">
                <hr></hr>
                <br></br>
                <h2>View another project:</h2>
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