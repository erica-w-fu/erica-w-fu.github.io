import React from "react";
import {useState} from "react";

import Intro from "../components/Intro/Intro.js";
import Section from '../components/Section/Section.js';
import Sub from '../components/SubSection/SubSection.js';
import Card from '../components/ProjectCard/ProjectCard.js';
import { projectProps } from '../components/data/Data.js'


function Equinix() {

    const item = projectProps('Equinix');
    const next = projectProps('Zeno');

    const [unlocked, setUnlocked] = useState(false);
    const [password, setPassword] = useState("");
    const confirmPassword = "LearnMoreAboutMe";

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            setUnlocked(false)
        } else {
            setUnlocked(true)
            console.log("pass", unlocked)
        }
    }

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

            <Section className={unlocked ? 'hidden' : ''}
            >
                <div className="body-small separate-section">
                    <h3>This work is publicly protected under NDA restrictions</h3>
                    <br></br>
                    <div>
                        <form>
                            <div className="text-input-container">
                                <label
                                    htmlFor="password"
                                >
                                    <h4>Password</h4>
                                </label>
                                <input 
                                    value={password}
                                    id="password"
                                    placeholder="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                            </div>
                            <button
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

            <div className={unlocked ? '' : 'hidden'}
            >
                <Section 
                    title="My role on the team"
                >
                    <Sub 
                        header="A UX advocate working with Product and Development teams"
                        body="Equinix gave me the incredible opportunity to work with many stakeholders. I collaborated with design teams to get and give feedback, presented to product teams the value of my work, and cooperated with developers to polish handoff files."
                    />
                </Section>

                <Section 
                    title="My role on the team"
                >
                    <Sub 
                        header="A UX advocate working with Product and Development teams"
                        body="Equinix gave me the incredible opportunity to work with many stakeholders. I collaborated with design teams to get and give feedback, presented to product teams the value of my work, and cooperated with developers to polish handoff files."
                    />
                </Section>

                <Section 
                    title="The Problem"
                >
                    <Sub 
                        header="How can we improve the Network Ordering interfaces?"
                        body=""
                    />
                </Section>
            </div>

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