import React, {useState, useEffect} from 'react';
import {FooterCondensed} from '../components/Footer/Footer.js';
import { NavLink } from 'react-router-dom';


import '../App.css';
import './Pages.css';

import JPMorganChaseLogo from '../media/Logos/JPMorganChaseLogo.png';
import JPMorganChaseLogoHover from '../media/Logos/JPMorganChaseLogoHover.png';
import JPMorganChaseImgHoverBG from '../media/JPMC/HeroBG.webp';


import EquinixLogo from '../media/Logos/EquinixLogo.png';
import EquinixLogoHover from '../media/Logos/EquinixLogoHover.png';
import EquinixImgHover from '../media/Equinix/Hero.png';
import EquinixImgHoverBG from '../media/Equinix/HeroBG.webp';

import ZenoLogo from '../media/Logos/ZenoLogo.png';
import ZenoLogoHover from '../media/Logos/ZenoLogoHover.png';
import ZenoImgHover from '../media/Zeno/Hero.webp';
import ZenoImgHoverBG from '../media/Zeno/HeroBG.png';

import ProjectCard from '../components/ProjectCard/ProjectCard.js'
import { Block, IconBullet } from "../components/TextBlocks/TextBlocks.js";

function Home() {

  const [hoverText, setHoverText] = useState('Erica Fu is a product designer who transforms complex concepts into intuitive experiences');
  const [hoverRole, setHoverRole] = useState('');
  const [hoverDetails, setHoverDetails] = useState(
    <>
      Currently at <strong>JPMorganChase</strong><br />
      <div className="spacer-4"/>
      Recently graduated from <strong>Carnegie Mellon in HCI</strong> + Information Systems<br />
      <div className="spacer-4"/>
      Intentionally centering human needs in AI-driven experiences
    </>
  );
  const [hoverImg, setHoverImg] = useState('none');

  const [hoverBG, setHoverBG] = useState('none');
  const [highlightFontColor, setHighlightFontColor] = useState('black');
  const projects = [
    { 
      id: 1,
      logo: JPMorganChaseLogo,
      logoHover: JPMorganChaseLogoHover,
      imgHoverBG: JPMorganChaseImgHoverBG,
      link: '/JPMorganChase',
      role: (<><strong>Lead Designer</strong> of AI tools for servicing specialists</>),
      details: (<>
        <IconBullet
          img={<span role="img" aria-label="Direction">🧭</span>}
          text={<><strong>Influenced direction</strong> of high-impact AI products</>}
        />
        <div class="spacer-8"></div>
        <IconBullet
          img={<span role="img" aria-label="Trust and Adoption">🤝</span>}
          text={<><strong>Improved trust and adoption</strong> of new AI tools in legacy workflows</>}
        />
        <div class="spacer-8"></div>
        <IconBullet
          img={<span role="img" aria-label="Partner">🧑‍🤝‍🧑</span> }
          text={<><strong>Positioned design as a strategic partner</strong> within a large enterprise</>}
        />
      </>
      ),
      description: 'JPMorganChase',
      tagsMain: "AI, Fintech",
      tagsSecondary: "UX/UI + AI strategy, Design systems, Service design",
      CTA: 'View projects',
      flex: 4
    },
    {
      id: 2,
      logo: EquinixLogo,
      logoHover: EquinixLogoHover,
      imgHover: EquinixImgHover,
      imgHoverBG: EquinixImgHoverBG,
      link: '/Equinix',
      role: (<><strong>Lead Designer</strong> for data center network ordering experiences</>),
      details: (
        <>
          <IconBullet
            img={<span role="img" aria-label="User adoption">✅</span>}
            text={<strong>Increased adoption</strong>}
          />
          <div class="spacer-8"></div>
          <IconBullet
            img={<span role="img" aria-label="Decomission">🗑️</span>}
            text={<><strong>Enabled decommissioning</strong> of legacy tools</>}
          />
          <div class="spacer-8"></div>
          <IconBullet
            img={<span role="img" aria-label="Scale">🚀</span>}
            text={<><strong>Established scalable reusable patterns</strong> across product spaces</>}
          />
        </>
      ),
      description: 'Equinix',
      tagsMain: "B2B",
      tagsSecondary: "UX/UI + Design systems",
      CTA: 'View case study',
      flex: 2
    },
    {
      id: 3,
      logo: ZenoLogo,
      logoHover: ZenoLogoHover,
      imgHover: ZenoImgHover,
      imgHoverBG: ZenoImgHoverBG,
      link: '/Zeno',
      role: (<><strong>Lead Designer</strong> for accessible ML evaluation platform</>),
      details: (
        <>
          <IconBullet
            img={<span role="img" aria-label="Research">👩‍🔬</span>}
            text={<>Contributed to <strong>academic research</strong></>}
          />
          <div class="spacer-8"></div>
          <IconBullet
            img={<span role="img" aria-label="Accessible">✨</span>}
            text={<>Distilled complex, technical workflows into intuitive experiences</>}
          />
          <div class="spacer-8"></div>
          <IconBullet
            img={<span role="img" aria-label="Open source">🔓</span>}
            text={<>Turned a specialized tool into a community resource via open source</>}
          />
        </>
      ),
      description: 'Zeno',
      tagsMain: "AI, Dashboard",
      tagsSecondary: "UX/UI + Design systems, Branding",
      CTA: 'View case study',
      flex: 2
    }
  ];

  const links  = [
    {
      id: 1,
      title: 'Play',
      link: '/Play',
    },
    {
      id: 2,
      title: 'About',
      link: '/About',
    }
  ]
  useEffect(() => {
    projects.forEach((p) => {
      if (p.imgHover) new Image().src = p.imgHover;
      if (p.imgHoverBG) new Image().src = p.imgHoverBG;
    });
  }, []);


  return (
<div className="page-container">
  <main className="main-content">
    <div className="home-nav">
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => {
            setHoverText(project.description)
            setHoverRole(project.role)
            setHoverDetails(project.details)
            setHoverImg(project.imgHover)
            setHoverBG(project.imgHoverBG)
            setHighlightFontColor('white')
          }}
          onMouseLeave={() => {
            setHoverText('Erica Fu is a product designer who transforms complex concepts into intuitive experiences')
            setHoverRole('')
            setHoverDetails(
              <>
                Currently at <strong>JPMorganChase</strong>
                <div className="spacer-4"/>
                Recently graduated from <strong>Carnegie Mellon in HCI</strong> + Information Systems
                <div className="spacer-4"/>  
                Intentionally centering human needs in AI-driven experiences
              </>
            )
            setHoverImg('none')
            setHoverBG('none')
            setHighlightFontColor('black')
          }}
          style={{flex: project.flex}}
        >
          <NavLink to={project.link} className='nav-links'>
            <ProjectCard
              logo={project.logo}
              logoHover={project.logoHover}
              details={project.details}
              tagsMain={project.tagsMain}
              tagsSecondary={project.tagsSecondary}
              CTA={project.CTA}
            />  
          </NavLink>
        </div>
      ))}
      <div className="flex-row home-other-page-nav">
        {links.map((link) => (
          <NavLink
            to={link.link} 
            key={link.id}
            className="nav-bar-links bordered-section flex-item"
          >
            <small style={{alignItems:"center"}}>{ link.title }</small>
          </NavLink>
        ))}
        <a 
          href="/Erica_Fu_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-bar-links bordered-section flex-item"
        >
          <small style={{alignItems:"center"}}>Resume</small>
        </a>
      </div>
    </div>

    <div 
      className={`bg-white bordered-section hero-container ${
        hoverBG !== 'none' ? 'bg-img-gradient-bottom' : ''
      }`}
      style={{
        color: highlightFontColor === 'black' ? 'var(--black)' : 'var(--white)',
        ...(hoverBG !== 'none' && { '--bg-image': `url(${hoverBG})` }),
      }}
    >
      <div className="hero-section">
        <h1 className="hero-title">{hoverText}</h1>
        <div className="hero-img-container">
          {hoverImg==='none' ? null : <img className="hero-img" src={hoverImg} /> }
        </div>
        {hoverRole===''? 
          <h5>{hoverDetails}</h5>
        :
          <div className="grid-container" style={{margin: 0, padding: 0}}>
            <div className="col-4">
              <Block
                caption = "Role"
                title={hoverRole}
                captionClass="caption-white"
              />
            </div>
            <div className="col-8">
              <Block
                caption = "Impact"
                title={hoverDetails}
                captionClass="caption-white"
              />
            </div>
          </div>
        }
      </div>
    </div>
  </main>

  <FooterCondensed />
</div>

  );
}

export default Home;