import React from "react";
import './Data.css'; 
import '../../App.css'

import thirty_day_adulting from './media/ThirtyDayCard.png'
import twentyfour from './media/24Card.png'
import sentence_mosaics from './media/SentenceMosaicsCard.png'
import dfa_website from './media/DFAWebsiteCard.png'
import duquesne_incline from './media/DuquesneWebsiteCard.png'
import microsite from './media/MicrositeCard.png'
import ccc from './media/CCCCard.jpeg'
import acrylic_pour_painting_platform from './media/AcrylicPourCard.jpg'
import reducing_singleuse from './media/SingleUse.png'

// function to create purple tags
function makeTags(str) {
    if (!str) return str;

    const tags = str.split(",");
    const final = []

    for (let tag of tags) {
        final.push(
            <div className="purple-tag">
                <b>{ tag }</b>
            </div>
        ) 
    }

    return final;
}

// function to format a string to include newlines
function formatText(str) {
    if (!str) return str;

    // replace \n in the string with <br />
    let formatted = [];
    const lines = str.split("\\n");

    for (let line of lines) {
        formatted.push(line);
        formatted.push(<br />);

    }
    return formatted;
}

function projectData() {
    
    const strRead = `Component	Title	Dates	Summary	Link	LinkTitle	Tags	Responsibilities	Tools	Team	ImgType~
    thirty_day_adulting	30-Day Adulting	May 2021 - present	Developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.\nWorking as a research assistant for the CoEx lab at CMU.			Research,Figma,Xcode • Swift,Firebase,Mobile App	App Development, UI/UX, Research	Xcode\nFirebase\nFigma	Isadora Krsek, Nellie Tonev, Sherry Chen	cropped~
    twentyfour	24	June 2019 - January 2021	Created a mobile version of my brother’s favorite card game, 24, first evaluating what features made the physical card game fun and incorporating them into the digital version.			Passion Project, UI/UX Design, Xcode • Swift, Mobile App	Wireframing, Research, Mobile App Development	Xcode\nSwift		uncropped~
    sentence_mosaics	Sentence Mosaics	August 2020 - May 2021	Developed Sentence Mosaics, a language therapy app that assists individuals with the formation of novel, complete, and meaningful sentences with a digital language coach.\nThis project was a part of Design For America, a club at Carnegie Mellon that works in interdisciplinary teams and uses the human-centered design process to create social good projects.	https://apps.apple.com/us/app/sentence-mosaics/id1288635184	View Project	Human Centered Design, Mobile App, React, CSS • HTML	App Development, User Testing	React\nCSS • HTML	Sashank Gogula, Kaylin Li, Stephen Tao, Megan Strauss	uncropped~
    dfa_website	DFA Website	May 2021 - August 2021	Developed the Design For America website to display all the current projects, past projects, and general information of Carnegie Mellon's Design for America club. As the president, I collaborated with the Technology Chair in developing the website in React.	https://www.dfaxcmu.org/	View Project	Website, React, CSS • HTML	Web Development 	React\nCSS • HTML	Kelly Wang, Thien Le, Spoorthi Cherivirala, Crystal Lee	top~
    duquesne_incline	Duquesne Incline Website	March 2021 - April 2021	Designed and developed a website for the Duquesne Incline, a popular tourist location at Pittsburgh. Using bright colors and incorporating an incline into the navigation, I created a playful website that effectively communicated all the information about the incline to visitors, students, and teachers.	https://erica-w-fu.github.io/duquesne-incline-erica/	View Project	Website, CSS • HTML, Javascript	Web Development, UI Design, User Testing	CSS • HTML\nJavascript		top~
    microsite	World Economic Forum Microsite	September 2021	Designed a website about the World Economic Forum from a simple, unformatted piece of text to understand how to highlight information for the intended users. Choosing youth activists as my intended audience, I emphasized the impact of the event topics (sustainability, inclusivity, and equality) while utilizing information architecture, progressive disclosure, grid structuring, and color theory principles to guide my design.	https://www.figma.com/proto/5zDN1AhUJuIUL7kuxAL7PF/WEC-Microsite?page-id=0%3A1&node-id=2%3A71&viewport=241%2C48%2C0.14&scaling=min-zoom&starting-point-node-id=2%3A71	View Project	UI/UX, Interaction Design, Figma	UI/UX	Figma		top~
    ccc 	Cross Country Communications	May 2021 - present	Constructed installations to explore unique remote communication methods through tactile interactions with a large canvas.\n\nOur team of three students is funded by a Small Undergraduate Research Grant from CMU and advised by Physical Computing instructor Robert Zacharias.	https://crosscountryconnections.github.io/index.html	Visit Website	Research, Prototyping, Physical Computing, Installation	Research, Physical Prototyping, Digital Prototyping, User Testing, Software, Hardware, 3D Modeling	Arduino\nRaspberry Pi\nUnity\nFusion 360\nPython	Michelle Dang, Jennifer Zhang, Robert Zacharias	cropped~
    acrylic_pour_painting_platform	Acrylic Pour Painting Platform	April 2021 - May 2021	Constructed an acrylic pouring device for a client. While our client had a passion for acrylic pour painting, her cerebral palsy necessitates assistance to create the painting, preventing her from being able to have full creative control over her pieces.	https://courses.ideate.cmu.edu/60-223/s2021/work/acrylic-pour-painting-platform-by-pines-final-documentation/	See Documentation	Human Centered Design,Physical Computing	Interviews, Contextual Inquiry, Physical Prototyping, 3D Modeling	Arduino\nUnity\nFusion 360	Tate Johnson, Daniela Castleberg	top~
    reducing_singleuse	Reducing Single Use at CMU	Nov 2021 - Dec 2021	Explored the problem space of single use food containers and utensils on campus. Through two types of research, surveying to get a high volume of responses and pocket journals to get data with more depth, we synthesized the students' perspective on the issue of single use and key features our solution must have to be effective. Based on those insights, we designed a reusable container product and the system that depicts the use of those containers.			UX Design, Research, Communication Design, Figma	Research, UX Design, Communication Design	User Research\nFigma	Julianna Bolivar, Gia Marino, Karan Shah	uncropped`
  
    return csvArray(strRead, '\t');
}

function csvArray(str, delim) {
    const headers = str.slice(0,str.indexOf('~')).split(delim);
    const rows = str.slice(str.indexOf('~')+1).split('~');
    console.log(rows);
  
    const newArray = rows.map( row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
          obj[header] = values[i].trim();
          return obj;
      }, {})
      return eachObject;
    })
  
    console.log(newArray)
    return newArray;
}

function projectImg(id) {
    switch (id) {
        case "thirty_day_adulting":
            return  thirty_day_adulting;
        case "twentyfour":
            return  twentyfour;
        case "sentence_mosaics":
            return  sentence_mosaics;
        case "dfa_website":
            return  dfa_website;
        case "duquesne_incline":
            return  duquesne_incline;
        case "microsite":
            return  microsite;
        case "ccc":
            return  ccc;
        case "acrylic_pour_painting_platform":
            return  acrylic_pour_painting_platform;
        case "reducing_singleuse":
            return  reducing_singleuse;
    }
}

export { makeTags, formatText, projectData, projectImg }
