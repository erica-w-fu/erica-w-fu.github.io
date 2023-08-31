import React from "react";
import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';

import { projectProps } from '../components/data/Data.js'


function Equinix() {

    const item = projectProps('Equinix');
    const next = projectProps('Zeno');

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

            <div className="divider-big"></div>

            <Section
            >
                <div className="body-small body-warning">
                    <h3>This work is publicly protected under NDA restrictions</h3>
                    <br></br>
                    <a href='mailto:efu@andrew.cmu.edu'>
                        <button>
                            Email me for more details
                        </button>
                    </a>
                </div>
            </Section>

            <div className="divider-big"></div>
            <div className="divider-big"></div>


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

export default Equinix;