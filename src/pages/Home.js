import React from 'react';
import { NavLink } from 'react-router-dom';

import './Pages.css';
import Socials from '../components/Socials/Socials.js'
import UXProjects from '../components/UXProjects/UXProjects.js'
import gif from '../media/welcome.gif'

function Home() {

  return (
      <>
        <div id="home-background">
          <div className="home-gif">
            <img src={gif} className="home-gif" alt="loading..." />
          </div>
          <div className="page-body body">
            <div className="right-align">
              <Socials/>
            </div>
            <div style={{padding: "150px"}}></div>
            <h1>I’m a UX designer at the CoEx and CHIMPs lab who can&nbsp; 
              <NavLink to='/Developer' >
                code
              </NavLink>.
            </h1>
          </div>
        </div>
        <div className="body">
          <UXProjects />
        </div>
      </>
  );
}

export default Home;