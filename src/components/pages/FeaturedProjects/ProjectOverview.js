import React from "react";
import FeaturedProjectSection from '../../FeaturedProjectSection/FeaturedProjectSection.js'; 

function ProjectOverview() {
    return (
        <>
            <div className="divider"></div>
            <div className="divider"></div>
            <FeaturedProjectSection
                key="thirty_day_adulting"
                title="30 Day Adulting"
                summary="Developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.\n\n 
                Working as a research assistant for the CoEx lab at CMU."
                tags="Research,Figma,Xcode • Swift,Firebase,Mobile App"
            />
            <FeaturedProjectSection
                key="twenty_four"
                title="24"
                summary="Created a mobile version of my brother’s favorite card game, 24, first evaluating what features made the physical card game fun and incorporating them into the digital version."
                tags="Passion Project, UI/UX Design, Xcode • Swift, Mobile App"
            />
            <FeaturedProjectSection
                key="ccc"
                title="Cross Country Connections"
                summary="Constructed installations to explore unique remote communication methods through tactile interactions with a large canvas.\n\n 
                Our team of three students is funded by a Small Undergraduate Research Grant from CMU and advised by Physical Computing instructor Robert Zacharias."
                tags="Research, Prototyping, Physical Computing, Installation"
            />
        </>
    )
}

export default ProjectOverview;