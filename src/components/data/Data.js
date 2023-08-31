import React from "react";
import './Data.css'; 
import '../../App.css'

import Equinix from '../../media/Cover/Equinix.png'
import Zeno from '../../media/Cover/Zeno.png'
import Adulting101 from '../../media/Cover/Adulting101.png'
import SustainCMU from '../../media/Cover/SustainCMU.png'
import TripPic from '../../media/Cover/TRIPPIC.png'

import CCC from '../../media/Cover/CCC.png';
import AcrylicPourPlatform from '../../media/Cover/AcrylicPourPlatform.png';
import DFAxCMU from '../../media/Cover/DFAxCMU.png';
import DuquesneIncline from '../../media/Cover/DuquesneIncline.png';
import GPBO from '../../media/Cover/GPBO.png';
import ImpactCMU from '../../media/Cover/ImpactCMU.png';
import SentenceMosaics from '../../media/Cover/SentenceMosaics.png';
import TwentyFour from '../../media/Cover/TwentyFour.png';

import ThirtyDayAdultingDemo from '../../media/DevDemos/ThirtyDayDemo.mov';
import TwentyFourDemo from '../../media/DevDemos/TwentyFourDemo.mp4';



// function to create tags
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
    Equinix	Equinix	Streamlining network connection ordering to Cloud Service Providers for network engineers	Prototyping,Product UX Library,Analytics Research,Think-Aloud Interviews	Summer 2023	As a UX Design Intern at Equinix, I redesigned and simplified network connection ordering workflow and UI for network engineers to connect assets to Cloud Service Providers. For more efficient design and development of future flows for other providers, I created and tested a product level UX library.			UI/UX\nResearch\nUser Testing	Figma\nAmplitude Analytics\nFullStory\nUserZoom	Design System Team\nProduct Team\nEngineering Team~
    Zeno	Zeno - DIG, CHIMPs lab	Equipping non-technical stakeholders with interactive ML evaluation tools	Web Interface,User Flow,Prototyping	May 2022 - present	As a Research Assistant at the DIG and CHIMPs labs at CMU, I designed experiences for the first evaluation framework of machine learning and interfaces for interactive slice-based evaluation. I designed user flows and data-heavy interfaces and validated the designs through group usability testing. 	https://zenoml.com/	Visit Website	UI/UX\nResearch\nUser Testing	Figma\nSvelte	Alex Cabrera\nDonny Bertucci~
    Adulting	Adulting101 - CoEx, CHIMPs lab	Encouraging everyday users to adopt cybersecurity practices	iOS App,Wireframing,Comparative Analysis	May 2021 - Aug 2022	As a Research Assistant at the CoEx and CHIMPs labs at CMU, I designed and developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.			App Development\nUI/UX\nResearch	Xcode\nFirebase\nFigma	Isadora Krsek\nNellie Tonev\nSherry Chen`
  
    return csvArray(strRead, '\t');
}

const DevProjectData = () => {
    const strRead = `Component	Title	HighlightBold	Highlight	Tags	Link	LinkTitle~
    CCC	Cross Country Connections	Remotely connected light installations	to explore remote connection through tactile interactions	Arduino,Raspberry Pi,Fusion 360,Physical Computing	https://crosscountryconnections.github.io/index.html	Visit Website~
    AcrylicPourPlatform	Acrylic Pour Painting Platform	A moving platform device	to give our client with cerebral palsy the ability to enjoy her hobby on her own	Arduino,Physical Computing	https://courses.ideate.cmu.edu/60-223/s2021/work/acrylic-pour-painting-platform-by-pines-final-documentation/	Visit Project Documentation~
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
        //   obj[header] = values[i].trim();
          const val = values[i]
          obj[header] = typeof val === 'string' ? val.trim() : '';
          return obj;
      }, {})
      return eachObject;
    })

    return newArray;
}

function projectTitle(id) {
    switch (id) {
        case "Equinix":
            return <h3>Streamlining <span className="complex-medium">network connection ordering</span> to Cloud Service Providers for network engineers</h3>;
        case "Zeno":
            return <h3>Equipping non-technical stakeholders with interactive <span className="complex-medium">ML evaluation tools</span></h3>;
        case "Adulting":
            return <h3>Encouraging everyday users to adopt <span className="complex-medium">cybersecurity practices</span></h3>;
        default:
            return;
    }
}

function projectImg(id) {
    switch (id) {
        case "Equinix":
            return Equinix;
        case "Adulting":
            return  Adulting101;
        case "Zeno":
            return Zeno;
        case "TripPic":
            return  TripPic;
        case "SustainCMU":
            return SustainCMU;
        case "CCC":
            return CCC;
        case "AcrylicPourPlatform":
            return AcrylicPourPlatform;
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
        default: 
            return;
    }
}

function projectDemo(id) {
    switch (id) {
        case "ThirtyDayAdulting":
            return  ThirtyDayAdultingDemo;
        case "TwentyFour":
            return  TwentyFourDemo;
        default:
            return;
    }
}

export { makeTags, formatText, UXProjectData, DevProjectData, projectProps, projectTitle, projectImg, projectDemo }
