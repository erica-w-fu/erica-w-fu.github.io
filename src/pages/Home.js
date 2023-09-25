import React from 'react';
import { NavLink } from 'react-router-dom';

import './Pages.css';
import UXProjects from '../components/UXProjects/UXProjects.js'
import SelfSummary from '../components/SelfSummary/SelfSummary.js'

import gif from '../media/welcome.gif'
import DevPreviewTop from '../media/DevPreviewTop.png'
import DevPreviewBottom from '../media/DevPreviewBottom.png'
import About from '../components/About/About.js'
import { makeTags } from '../components/data/Data.js'
import Fade from 'react-reveal/Fade';

function Home() {

	const scrollToTop = () => {
		window.scrollTo({top: 0});
	};

  const tags = "Website,React,HTML • CSS • JavaScript,Physical Computing,Arduino,Xcode • Swift,iOS App,Ruby on Rails,React Native,Mobile App"

  return (
      <>
        <div id="home-background">
          <div className="home-gif">
            <img src={gif} className="home-gif" alt="loading..." />
          </div>
          <div className="page-body">
            <div style={{padding: "125px"}}></div>
            <div className="lab-links body">
              <h6>UX designer who transforms<span className="complex-large"> complex concepts</span> into simple experiences</h6>
            </div>
          </div>
        </div>
        
        <div className="body">
          {/* <h3>UX Design projects</h3> */}
          <UXProjects />

          <div className="divider-big"></div>

          <Fade left distance="20%">
            <NavLink to='/Developer' className="no-underline" onClick={scrollToTop}>
              <div className='dev-link-container'>
                <img src={DevPreviewTop} className="dev-img" alt="Development project preview" />
                <div className='dev-link'>
                  <h2>With my Information Systems background, I have also developed many front-end and full stack projects.</h2>
                  <div className="featured-tags dev-tags">{ makeTags(tags) }</div>
                </div>
                <img src={DevPreviewBottom} className="dev-img" alt="Development project preview" />
              </div>
            </NavLink>
          </Fade>

          <div className="divider-big"></div>


          <Fade bottom>
            <div className="separate-section">
            <h3>My experience comes from a variety of institutions.</h3>
            <br></br>
            <SelfSummary />
            </div>
          </Fade>

          <div className="divider-big"></div>
          
          <About />
        </div>
      </>
  );
}

export default Home;