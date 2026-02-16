import React from "react";
import {useState} from "react";

import {KeyValue} from "../components/TextBlocks/TextBlocks.js";

import Profile from '../media/About/Profile.webp';
import Config from '../media/About/Config.webp';
import Grad from '../media/About/CMUGrad.webp';
import California from '../media/About/California.webp';

const tidbits = [
    {
        id: 1,
        caption: "Recent adventure...",
        img: Config,
        description: <><strong>Attended Config 2025</strong>  with the Chief Design Officer at Chase, Miki Van Cleave!<br/><br/>Brought back learnings from Config to my JPMorganChase colleagues, sparking conversations around AI design best practices.</>

    },
    {  
        id: 2,
        caption: "Previously...",
        img: Grad,
        description: <><strong>Graduated from Carnegie Mellon</strong> with a degree in HCI + Information Systems, plus a collection of minors in Design, Computer Science, and Soft Technology. <br/><br/>Coursework in human-AI interaction and ethics shaped my perspective on designing with AI: to focus on adoption, trust, and what systems should do, not just what they can.</>

    },
    {
        id: 3,
        caption: "Where is home?",
        img: California,
        description: <><strong>Grew up in San Jose, California</strong> where I developed a love for diverse and delicious food, nearby mountains, and weekend trips to the beach.<br/><br/>This photo is of my brother and me at Yosemite.</>
    }
]

function About() {

    return (
        <>
        <div className="grid-container">
            <div className="about-section">
                <div className="col-4">
                    <img src={ Profile }></img>
                </div>
                <div className="col-6">
                    <h1>Hi there!</h1>
                    <div className="spacer-16"/>
                    <p>I'm Erica, a UX/Product Designer who brings clarity to complex systems and workflows. I'm currently at Chase, designing AI-powered tools for servicing specialists. My experience of building scalable and AI-driven products spans across small startup-style teams to enterprise-scale platforms.</p>
                    <div className="spacer-16"/>
                    <p>I have a technical background in Information Systems, full-stack development, and data science. I also have deep research experience—conducting studies across projects and teaching research methodology and Human-Centered Design. This blend of skills enables me to collaborate closely with engineers, researchers, and stakeholders to translate abstract requirements into thoughtful design strategies.</p>
                    <div className="spacer-16"/>
                    <p>–</p>
                    <div className="spacer-16"/>
                    <p>I'm currently seeking opportunities to shape impactful, real-world experiences with collaborative hybrid or in-person teams.</p>
                </div>
            </div>
            <div className="centered-col-10">
                <div className="dotted-line"></div>
            </div>
            {tidbits.map((t) => (
                <div className="about-section">
                    <div className="col-2">
                        <small className="caption subdued">{t.caption}</small>
                    </div>
                    <div className="col-4">
                        <p>{t.description}</p>
                    </div>
                    <div className="col-4">
                        <img src={ t.img }></img>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default About;