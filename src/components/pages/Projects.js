import React, {useState} from 'react';
import './Pages.css';
import Card from '../ProjectCard/ProjectCard.js';
import Footer from '../Footer/Footer.js'
import { projectData } from '../data/Data.js'

function Projects() {

  const data = projectData()
  console.log(data);

  return( 
    <>
      <div className="gallery-container-two">
        {
          data.map((item) => {
            return <div className="gallery-two">
              {/* <Link to={`/Projects/${item.Component}`}> */}
                <Card
                  key={ item.Component }
                  component={ item.Component }
                  title={ item.Title }
                  dates={ item.Dates }
                  summary={ item.Summary }
                  link={ item.Link }
                  linkTitle={ item.LinkTitle }
                  tags={ item.Tags }
                  responsibilities={ item.Responsibilities }
                  tools={ item.Tools }
                  team={ item.Team }
                  imgType={ item.ImgType }
                />
            </div>
          })
        }
      </div>
      <Footer />
    </>
  );
}

export default Projects;


