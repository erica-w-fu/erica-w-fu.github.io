import React from "react";
import FeaturedIntro from "../../FeaturedIntro/FeaturedIntro";
import Section from '../../FeaturedContent/FeaturedContent.js';

import demo from './media/ThirtyDay-demo.mov';
import taskWireframe from './media/ThirtyDayTask.png';
import profileWireframe from './media/ThirtyDayProfile.png'
import messagingWireframe from './media/ThirtyDayMessaging.png'


function ThirtyDay() {
    return (
        <>
            <FeaturedIntro
                key="thirty_day_adulting"
                component="thirty_day_adulting"
                title="30 Day Adulting"
                date="May 2021 - present"
                summary="Developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.\n\n 
                Working as a research assistant for the CoEx lab at CMU."
                responsibilities="Mobile App Development, UI/UX, Research"
                tools="Xcode\nFirebase\nFigma"
                imgType="cropped"
                link=""
                team="Isadora Krsek, Nellie Tonev, Sherry Chen"
            />
            <Section 
                title="Problem Space"
            >
                <h6>How do we improve young adult’s adoption of cybersecurity tools?</h6>
                <p>
                    Young adults are seeking help online for how they can “get their life together,” but cybersecurity doesn’t appear in any existing self-development guides. This is more surprising when you consider that roughly 2/3 of U.S. Internet users are estimated to have experienced data theft of some kind and over half of U.S. Internet users surveyed have expressed wanting to do more protect their online security and privacy.<br/><br/>
                    Despite these sentiments, as well as attempts to raise the security sensitivity of the general populace, expert’s advice on cybersecurity is largely ignored and general knowledge remains low.
                </p>
            </Section>
            <Section 
                title="Generative Research Insights"
            >
                <p>Based on user speed-dating sessions we gained feedback on our social proof features.</p>
                <br></br>
                <h6>Accountability buddies</h6>
                <p>
                    Participants showed a strong preference for doing the challenge with a companion or “accountability buddy.” The idea of participating in a “adulting” chalenge with a friend excited participants, who expressed wanting to collaborate on “adulting” tasks with their accoutability buddy.
                </p>
                <br></br>
                <h6>Sharing resources on tasks</h6>
                <p>
                    Participants voted in high numbers for feautres that supported their ability to discuss and share resources on tasks such as prompts for sharing updates on in-progress tasks, the ability to share tasks directly, and in-app messaging capabilites with which they could share resources for tasks.
                </p>
                <br></br>
                <h6>Sharing progress</h6>
                <p>
                    Many participants expressed great interest in features that alowed them to share their progress with others, and see the progress of their friends through the challenge (such as stats and achievement badges on profiles). They also wanted to see the daily tasks their partner completed.
                </p>
                <br></br>
                <h6>Tedious notifications</h6>
                <p>
                    Across the board, participants ranked social influence features that relied on notifications (such as notifying them when their buddy completed a task), or testimonials from other users on their overall adulting experience the lowers. They felt it seemed too tedious or annoying – like advertising.
                </p>
            </Section>
            <Section 
                title="Initial Prototypes"
            >
                <p>With those insights, we decided to keep three pages: a task page, a profile page, and a messaging page.</p>
                <br></br>
                <br></br>
                <h6>Task page</h6>
                <p>
                    This main page displays three tasks that can be expanded for more details, marked as complete, and starred.
                </p>
                <br></br>
                <img src={ taskWireframe } className="featured-content-media"></img>
                <br></br>
                <h6>Profile page</h6>
                <p>
                    Since users want to see and share each others’ progress with their accountability buddies, we ideated how a profile page with statistics and past tasks could effectively be displayed. Also, we created a saved tasks section so that users can save resources to easily reference later.
                </p>
                <br></br>
                <img src={ profileWireframe } className="featured-content-media"></img>
                <br></br>
                <br></br>
                <h6>Messaging page</h6>
                <p>
                    To further encourage communication and support between accountability buddies, we ideated how a messaging page could incorporate quick ways to remind others to do tasks, share resources, and more.
                </p>
                <br></br>
                <img src={ messagingWireframe } className="featured-content-media"></img>
            </Section>
            <Section 
                title="Development"
            >
                <p>In addition to prototyping, I develop the ideas we have on Xcode. Here is the latest video demo.</p>
                <br></br>
                <video width="30%" controls >
                    <source src={demo} type="video/mp4"/>
                </video>
            </Section>
            <Section 
                title="Next Steps"
            >
                <p>After the designer completes the wireframes, I will implement the UI on Xcode and continue to develop the interactions.</p>
            </Section>
        </>
    )
}

export default ThirtyDay;