import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js';

import JournalResults from '../media/ReducingSingleUse/JournalResults.png';
import JournalSynthesis from '../media/ReducingSingleUse/JournalSynthesis.png';
import PainPoints from '../media/ReducingSingleUse/PainPoints.png';
import Solution from '../media/ReducingSingleUse/Solution.png';
import SolutionConsiderations from '../media/ReducingSingleUse/SolutionConsiderations.png';
import SolutionUserFlow from '../media/ReducingSingleUse/SolutionUserFlow.png';
import SurveyQuotes from '../media/ReducingSingleUse/SurveyQuotes.png';
import SurveyResults from '../media/ReducingSingleUse/SurveyResults.png';
import SurveySynthesis from '../media/ReducingSingleUse/SurveySynthesis.png';
import Poster from '../media/ReducingSingleUse/Poster.jpg';

function ReducingSingleUse() {

    const item = projectProps('ReducingSingleUse');
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
                    header="How might we reduce the use of single-use containers and utensils while still making food services accessible and convenient for CMU students who do not have disposable time and income?"
                    body="Campus food is exclusively served with single-use containers and plastic utensils. With every freshman using meal plans, and even students without a meal plan eating often on campus, this results in CMU producing tons of single-use waste every semester."
                />
                <Sub
                    header="Pain Points"
                    img={ PainPoints }
                />
            </Section>
            <Section 
                title="Research Method 1: Surveys"
            >
                <Sub    
                    body="We conducted a survey to find what students currently understand about sustainable practices, to identify any common constraints, and evaluate whether students would be willing to learn about and implement new sustainable practices in their lives."
                />
                <Sub 
                    header="Results"   
                    img={ SurveyResults }
                />
                <Sub 
                    header="Quotes"
                    img={ SurveyQuotes }
                />
                <Sub 
                    header="Synthesis"
                    img={ SurveySynthesis }
                />
            </Section>
            <Section 
                title="Research Method 2: Pocket Journals"
            >
                <Sub 
                    body="We distributed journals to four students (on and off-campus) to get a more personal view of students’ food consumption and purchasing habits."
                />
                <Sub 
                    header="Results"
                    img={ JournalResults }
                />
                <Sub 
                    header="Synthesis"
                    img={ JournalSynthesis }
                />
            </Section>
            <Section 
                title="Solution"
            >
                <Sub
                    header="Reusable bento boxes and utensils"
                    img={ Solution }
                />
                <Sub 
                    header="User Flow"
                    img={ SolutionUserFlow }
                />
                <Sub 
                    header="Other Considerations"
                    img={ SolutionConsiderations }
                />
            </Section>

            <hr></hr>
            <h2>View another project</h2>
            <br></br>
            <Card 
                key={ next.Component }
                component={ next.Component }
                title={ next.Title }
                highlight={ next.Highlight }
                tags={ next.Tags }
            />
        </div>
    )
}

export default ReducingSingleUse;