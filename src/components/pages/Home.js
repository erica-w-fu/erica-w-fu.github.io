import React from 'react';
import { Outlet } from 'react-router-dom';

import '../../App.css';
import './Pages.css';
import ProjectNav from '../ProjectNav/ProjectNav.js'

// import FeaturedComponent from './FeaturedProjects/FeaturedComponent.js'
import ProjectOverview from'./FeaturedProjects/ProjectOverview.js'
import ThirtyDay from'./FeaturedProjects/ThirtyDay.js'

function Home() {

  return (
      <>
        <div className="intro">
          <h4>
            <b>Nice to meet you! I am a sophomore at Carnegie Mellon University majoring in Information Systems </b>
            and minoring in Human Computer Interaction, Design, and Computer Science. I hope to use my skills to help others or bring them a unique experience.
          </h4>
        </div>
        <div className="divider-big"></div>
        <div className="featured-container-big">
          <div className="sticky">
              <ProjectNav/>
          </div>
          <div className="project-container">
            <Outlet/>
          </div>
        </div>
        <div className="divider"></div>
      </>
  );
}

export default Home;