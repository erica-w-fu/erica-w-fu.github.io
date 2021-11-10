import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../App.css';
import './Pages.css';

import FeaturedProjectSection from'../FeaturedProjectSection/FeaturedProjectSection.js'

function Home() {

  return (
      <>
        <h4>
          <b>Nice to meet you! </b>
            I am an Information Systems major at Carnegie Mellon University, minoring in Human Computer Interaction, Design, and Computer Science. I hope to use my skills to help others and bring them a unique experience.  
        </h4>

        <div className="divider-big"></div>
        <h3><b>Featured Projects</b></h3>
        <a href="Projects/#SwiftXCode">
          <FeaturedProjectSection
            key="thirty_day_adulting"
            title="30 Day Adulting"
            summary="Developed an adulting challenge iOS application to use social influence principles to effectively teach and encourage cybersecurity habits."
            component="thirty_day_adulting"
            pos="0"
          />
        </a>
        <a href="Projects/#PhysicalComputing">
          <FeaturedProjectSection
            key="ccc"
            title="Cross Country Connections"
            summary="Used physical computing to create a playful, remotely connected, and interactive canvas."
            component="ccc"
            pos="1"
          />
        </a>
        <a href="Projects/#React">
          <FeaturedProjectSection
            key="sentence_mosaics"
            title="Sentence Mosaics"
            summary="Developed a language therapy app with React to assist individuals with the formation of novel, complete, and meaningful sentences with a digital language coach."
            component="sentence_mosaics"
            pos="2"
          />
        </a>
      </>
  );
}

export default Home;