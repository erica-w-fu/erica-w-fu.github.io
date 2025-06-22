import React, {useState} from 'react';
import Footer from '../components/Footer/Footer.js';

import '../App.css';
import './Pages.css';

import JPMorganChaseLogo from '../media/Logos/JPMorganChaseLogo.png';
import JPMorganChaseLogoHover from '../media/Logos/JPMorganChaseLogoHover.png';
import JPMorganChaseImgHover from '../media/Logos/JPMorganChaseImgHover.png';

import EquinixLogo from '../media/Logos/EquinixLogo.png';
import EquinixLogoHover from '../media/Logos/EquinixLogoHover.png';
import EquinixImgHover from '../media/Logos/EquinixImgHover.png';

import ZenoLogo from '../media/Logos/ZenoLogo.png';
import ZenoLogoHover from '../media/Logos/ZenoLogoHover.png';
import ZenoImgHover from '../media/Logos/ZenoImgHover.png';

import CMULogo from '../media/Logos/CMULogo.png';
import CMULogoHover from '../media/Logos/CMULogoHover.png';
import CMUImgHover from '../media/Logos/CMUImgHover.png';

import ProjectCard from '../components/ProjectCard/ProjectCard.js'


import { NavLink } from 'react-router-dom';

import UXProjects from '../components/UXProjects/UXProjects.js'
import SelfSummary from '../components/SelfSummary/SelfSummary.js'

import gif from '../media/welcome.gif'
import DevPreviewTop from '../media/DevPreviewTop.png'
import DevPreviewBottom from '../media/DevPreviewBottom.png'
import About from '../components/About/About.js'
import { makeTags } from '../components/data/Data.js'
import Fade from 'react-reveal/Fade';

function Home() {

  const [hoverText, setHoverText] = useState('Erica Fu is a product designer who transforms complex concepts into simple experiences');
  const [hoverImg, setHoverImg] = useState('none');
  const [highlightFontColor, setHighlightFontColor] = useState('black');
  const projects = [
    { 
      id: 1,
      logo: JPMorganChaseLogo,
      logoHover: JPMorganChaseLogoHover,
      imgHover: JPMorganChaseImgHover,
      title: 'JPMorganChase',
      description: 'Improved efficiency and accuracy of customer support by designing AI-powered experiences for servicing specialists',
      tags: [
        'AI, Fintech',
        'UX/UI + AI strategy, Design systems, Service design',
        'Interviews, Survey'
      ],
      CTA: 'View projects'
    },
    {
      id: 2,
      logo: EquinixLogo,
      logoHover: EquinixLogoHover,
      imgHover: EquinixImgHover,
      title: 'Equinix',
      description: 'Enabled scalable product development by constructing and validating a UX library for network connection ordering experiences',
      tags: [
        'B2B',
        'UX/UI + Design systems',
        'Analytics, Interviews'
      ],
      CTA: 'View case study'
    },
    {
      id: 3,
      logo: ZenoLogo,
      logoHover: ZenoLogoHover,
      imgHover: ZenoImgHover,
      title: 'Zeno',
      description: 'Enhanced transparency and cross-functional collaboration by equipping non-technical stakeholders with interactive ML evaluation tools',
      tags: [
        'AI, Dashboard',
        'UX/UI + Design systems, Branding',
        'Research, Group usability testing'
      ],
      CTA: 'View case study'
    },
    {
      id: 4,
      logo: CMULogo,
      logoHover: CMULogoHover,
      imgHover: CMUImgHover,
      title: 'TEEL Lab',
      description: 'Empowered self-guided learning and reduced instructional workload in CS courses by designing a personalized auto-grader system',
      tags: [
        'AI',
        'UX/UI + Micro interactions',
        'Interviews'
      ],
      CTA: 'View case study'
    }
  ];

  return (
      <div className="flex-col" style={{height: "100vh", overflow: 'hidden'}}>
        <div 
          className="bordered-section" 
          style={{
            flex: "1",
            backgroundImage: `url(${hoverImg})`,
            color: highlightFontColor === 'black' ? 'var(--black)' : 'var(--white)',
          }}
        >
          <h1 style={{marginTop: "auto", marginBottom: "32px"}}>
            {hoverText}
          </h1>
        </div>
        <div className="flex-row">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => {
                setHoverText(project.description)
                setHoverImg(project.imgHover)
                setHighlightFontColor('white')
              }}
              onMouseLeave={() => {
                setHoverText('Erica Fu is a product designer who transforms complex concepts into simple experiences')
                setHoverImg('none')
                setHighlightFontColor('black')
              }}
              style={{flex:'1', height:'100%'}}
            >
              <ProjectCard
                logo = {project.logo}
                logoHover = {project.logoHover}
                title = {project.title}
                tags = {project.tags}
                CTA = {project.CTA}
              />  
            </div>
          ))}
          {/* <ProjectCard
            logo={JPMorganChaseLogo}
            logoHover={JPMorganChaseLogoHover}
            imgHover={JPMorganChaseImgHover}
            title="JPMorganChase"
            description="Improved efficiency and accuracy of customer support by designing AI-powered experiences for servicing specialists"
            tags={["AI, Fintech, Web", "UX/UI + AI strategy, Design systems, Service design", "Interviews, Survey"]}
            CTA="View projects"
         />
          <ProjectCard
            logo={EquinixLogo}
            logoHover={EquinixLogoHover}
            imgHover={EquinixImgHover}
            title="Equinix"
            description="Enabled scalable product development by constructing and validating a UX library for network connection ordering experiences"
            tags={["B2B, Web", "UX/UI + Design systems", "Analytics, Interviews"]}
            CTA="View case study"
          />
          <ProjectCard
            logo={ZenoLogo}
            logoHover={ZenoLogoHover}
            imgHover={ZenoImgHover}
            title="Zeno"
            description="Enhanced transparency and cross-functional collaboration by  equipping non-technical stakeholders with interactive ML evaluation tools"
            tags={["AI, Dashboard, Web", "UX/UI + Design systems, Branding", "Research, Group usability testing"]}
            CTA="View case study"
          />
          <ProjectCard
            logo={CMULogo}
            logoHover={CMULogoHover}
            imgHover={CMUImgHover}
            title="TEEL Lab"
            description="Empowered self-guided learning and reduced instructional workload in CS courses by designing a personalized auto-grader system"
            tags={["AI, Web", "UX/UI + Micro interactions", "Interviews"]}
            CTA="View case study"
          /> */}
        </div>
        <Footer />
      </div>
  );
}

export default Home;