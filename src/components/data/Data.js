import React from "react";
import './Data.css'; 
import '../../App.css'

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

    const strRead = `Component	Title	Highlight	Tags	Dates	Summary	Link	LinkTitle	Responsibilities	Tools	Team	Timeline~
    Zeno	Zeno	First machine learning evaluation framework and tool	Research,Figma,Svelte,Web Interface	May 2022 - present	Designed experiences for the first evaluation framework of machine learning and interfaces for interactive slice-based evaluation.\n \nWorking as a research assistant for the CHIMPs and DIG lab at CMU	https://zenoml.com/	Visit Website	UI/UX\nResearch\nUser Testing	Figma\nSvelte	Alex Cabrera\nDonny Bertuci	May 2022 - Present~
    Adulting	Adulting101	iOS app to increase the adoption of cybersecurity habits	Research,Figma,Xcode • Swift,Firebase,Mobile App	May 2021 - present	Designed and developed an adulting challenge iOS application that uses embedded design and social influence principles to effectively teach and encourage cybersecurity habits.\n \nWorking as a research assistant for the CoEx and CHIMPs lab at CMU.			App Development\nUI/UX\nResearch	Xcode\nFirebase\nFigma	Isadora Krsek\nNellie Tonev\nSherry Chen	May 2021 - Aug 2022~
    TripPic	TRIP-PIC	UX research and design for travel planning innovation	Research,Contextual Inquiries,Prototyping,Project Management	Jan 2022 - May 2022	Streamlining travel planning for young tech-savvy users by combining a visual-focused interface with social media to generate scheduled itineraries for trips.			Project Management\nContextual Inquiries\nPrototyping	Miro\nFigma	Heysu Oh\nAdvait Wadhwani	Spring 2022~
    SustainCMU	Sustain CMU	Communication design to correct waste disposal behavior at CMU	Human-Centered Design, Communication Design, Parallel Prototyping	Jan 2022 - May 2022	Using communication design to make students aware of the waste management issues at CMU and correcting waste disposal habits.	https://www.dfaxcmu.org/sustain-cmu	Visit Project	Prototyping\nUser Testing\nCommunication Design	Figma	Kelly Wang\nJulianna Bolivar\nCatherine Liu	Spring 2022`
  
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
          obj[header] = values[i].trim();
          return obj;
      }, {})
      return eachObject;
    })

    return newArray;
}

function projectImg(id) {
    switch (id) {
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
