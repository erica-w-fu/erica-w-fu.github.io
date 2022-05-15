import React from "react";
import './Data.css'; 
import '../../App.css'

import ThirtyDayAdulting from '../../media/Cover/30Day.png'
import ReducingSingleUse from '../../media/Cover/SingleUse.png'
import SustainCMU from '../../media/Cover/SustainCMU.png'
import TripPic from '../../media/Cover/TRIPPIC.png'

import DFAxCMU from '../../media/Cover/DFAxCMU.png';
import DuquesneIncline from '../../media/Cover/DuquesneIncline.png';
import GPBO from '../../media/Cover/GPBO.png';
import ImpactCMU from '../../media/Cover/ImpactCMU.png';
import SentenceMosaics from '../../media/Cover/SentenceMosaics.png';
import TwentyFour from '../../media/Cover/TwentyFour.png';
import PortfolioWebsite from '../../media/Cover/PortfolioWebsite.png';

import ThirtyDayAdultingDemo from '../../media/DevDemos/ThirtyDayDemo.mov';
import TwentyFourDemo from '../../media/DevDemos/TwentyFourDemo.mp4';



// function to create purple tags
function makeTags(str) {
    if (!str) return str;

    const tags = str.split(",");
    const final = []

    for (let tag of tags) {
        final.push(
            <div className="tag">
                { tag }
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
    const lines = str.split("\n");

    for (let line of lines) {
        formatted.push(line);
        formatted.push(<br />);

    }

    return formatted;
}

// extract data from a tsv to a csv array
const UXProjectData = () => {

    const strRead = `Component	Title	Highlight	Tags	Dates	Summary	Link	LinkTitle	Responsibilities	Tools	Team~
    ThirtyDayAdulting	30-Day Adulting	iOS app design and development to increase the adoption of cybersecurity habits	Research,Figma,Xcode • Swift,Firebase,Mobile App	May 2021 - present	Designed and developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.\nWorking as a research assistant for the CoEx lab at CMU.			App Development, UI/UX, Research	Xcode\nFirebase\nFigma	Isadora Krsek, Nellie Tonev, Sherry Chen~
    TripPic	TRIP-PIC	UX research and design for travel planning innovation	Research,Contextual Inquiries,Prototyping,Project Management	Jan 2022 - May 2022	Streamlining travel planning for young tech-savvy users by combining a visual-focused interface with social media to generate scheduled itineraries for trips.			Project Management, Contextual Inquiries, Prototyping	Miro\nFigma	Heysu Oh, Advait Wadhwani~
    ReducingSingleUse	Reducing single-use	Service design to reduce single-use at CMU dining	Service Design,Research,Contextual Inquiries, Figma	Aug 2021 - Dec 2021	Designed a solution to incorporate reusable containers to reduce the amoung of single use from dining services while still supporting college student dining habits on and off campus.			Contextual Inquiries, Service Design, Communication Design	Figma	Julianna Bolivar, Gia Marino, Karan Shah~
    SustainCMU	Sustain CMU	Communication design to correct waste disposal behavior at CMU	Human-Centered Design, Communication Design, Parallel Prototyping	Jan 2022 - May 2022	Using communication design to make students aware of the waste management issues at CMU and correcting waste disposal habits.	https://www.dfaxcmu.org/sustain-cmu	Visit Project	Prototyping, User Testing, Communication Design	Figma	Kelly Wang, Julianna Bolivar, Catherine Liu`
  
    return csvArray(strRead, '\t');
}

const DevProjectData = () => {
    const strRead = `Component	Title	HighlightBold	Highlight	Tags	Link	LinkTitle~
    PortfolioWebsite	Personal Portfolio Website	Portfolio website	to showcase all of my development and UX design projects	React,HTML • CSS • JavaScript,Website	https://ericafu.me/	View Project~
    ThirtyDayAdulting	30-Day Adulting	iOS application	to teach and encourage cybersecurity habits using social influence principles	Xcode • Swift,Firebase,iOS App 		View Demo~
    GPBO	Great Pittsburgh Baking Outlet	eCommerce website	created for different users – admin, customers, shippers, and guests	Ruby on Rails,HTML • CSS • JavaScript,Website		~
    ImpactCMU	Impact CMU	Event website	to advertise and display projects for an annual social good showcase at Carnegie Mellon	React,HTML • CSS • JavaScript,Website	http://impactcmu.com/	Visit Project~
    DFAxCMU	DFA x CMU	Student organization website	to display social good projects from the Carnegie Mellon chapter of Design for America	React,HTML • CSS • JavaScript,Website	https://www.dfaxcmu.org//	Visit Project~
    DuquesneIncline	Duquesne Incline	Business website	to playfully communicate information about Pittsburgh's attraction to visitors, students, and teachers	HTML • CSS • JavaScript,Website	https://erica-w-fu.github.io/duquesne-incline-erica/	Visit Project~
    SentenceMosaics	Sentence Mosaics	Speech therapy app	to teach and reinforce formulation of complete and meaningful spoken sentences	React Native, Mobile App	https://sentence-mosaics.herokuapp.com/	Visit Website~
    TwentyFour	24	iOS game	to digitalize my brother's favorite card game	Xcode • Swift,iOS App 		View Demo`

    return csvArray(strRead, '\t');
}

function projectProps(str) {
    const arr = UXProjectData();
    return arr.find((elem) => {return elem.Component === str});
}

function csvArray(str, delim) {
    const headers = str.slice(0,str.indexOf('~')).split(delim);
    const rows = str.slice(str.indexOf('~')+1).split('~');
  
    const newArray = rows.map( row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
          obj[header] = values[i].trim();
          return obj;
      }, {})
      return eachObject;
    })

    return newArray;
}

function projectImg(id) {
    switch (id) {
        case "ThirtyDayAdulting":
            return  ThirtyDayAdulting;
        case "ReducingSingleUse":
            return  ReducingSingleUse;
        case "TripPic":
            return  TripPic;
        case "SustainCMU":
            return SustainCMU;
        case "TwentyFour":
            return  TwentyFour;
        case "SentenceMosaics":
            return  SentenceMosaics;
        case "DFAxCMU":
            return  DFAxCMU;
        case "DuquesneIncline":
            return  DuquesneIncline;
        case "GPBO":
            return  GPBO;
        case "ImpactCMU":
            return  ImpactCMU;
        case "PortfolioWebsite":
            return  PortfolioWebsite;
    }
}

function projectDemo(id) {
    switch (id) {
        case "ThirtyDayAdulting":
            return  ThirtyDayAdultingDemo;
        case "TwentyFour":
            return  TwentyFourDemo;
    }
}

export { makeTags, formatText, UXProjectData, DevProjectData, projectProps, projectImg, projectDemo }
