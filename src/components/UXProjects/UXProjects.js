import React from 'react';

import './UXProjects.css';
import Card from '../ProjectCard/ProjectCard.js';
import { UXProjectData } from '../data/Data.js'


function UXProjects() {
    
    const data = UXProjectData();
    
    return (
      <div>
        {/* <h2><b>UX design</b> <div className="unbold">projects</div></h2> */}
        <div className="ux-projects">
        {
          data.map((item, index) => {
            return <div>
                <Card
                    key={ index }
                    component={ item.Component }
                    title={ item.Title }
                    highlight={ item.Highlight }
                    tags={ item.Tags }
                    dates={ item.Dates }
                    summary={ item.Summary }
                    link={ item.Link }
                    linkTitle={ item.LinkTitle }
                    responsibilities={ item.Responsibilities }
                    tools={ item.Tools }
                    team={ item.Team }
                    index={ index }
                />
            </div>
          })
        }
        </div>
      </div>
    );
}

export default UXProjects;