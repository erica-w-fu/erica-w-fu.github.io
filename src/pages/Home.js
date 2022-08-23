import React from 'react';
import { NavLink } from 'react-router-dom';

import './Pages.css';
import Socials from '../components/Socials/Socials.js'
import UXProjects from '../components/UXProjects/UXProjects.js'
import gif from '../media/welcome.gif'
import About from '../components/About/About.js'
import { makeTags } from '../components/data/Data.js'

function Home() {

	const scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	};

  const tags = "Website,React,HTML • CSS • JavaScript,Physical Computing,Arduino,Xcode • Swift,iOS App,Ruby on Rails,React Native,Mobile App"

  return (
      <>
        <div id="home-background">
          <div className="home-gif">
            <img src={gif} className="home-gif" alt="loading..." />
          </div>
          <div className="page-body body">
            <div style={{padding: "150px"}}></div>
            <h6 className="lab-links">I’m a UX designer at the&nbsp; 
              <a target='_blank' href='http://3.210.81.13/about_us'>CHIMPs</a>,&nbsp; 
              <a target='_blank' href='https://dig.cmu.edu/'>DIG</a>, and&nbsp; 
              <a target='_blank' href='http://coexlab.com/'>CoEx</a> lab.
            </h6>
          </div>
        </div>
        <div className="body">
          <UXProjects />
          <NavLink to='/Developer' className="no-underline" onClick={scrollToTop}>
            <div className='dev-link'>
              <h2>With my background in Information Systems, I have also worked on a variety of websites, mobile applications, and physical computing projects.</h2>
              <div className="featured-tags dev-tags">{ makeTags(tags) }</div>
            </div>
					</NavLink>
          <About />
        </div>
      </>
  );
}

export default Home;