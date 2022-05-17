import React from 'react';

import './DevProjects.css';
import Card from '../ProjectCard/ProjectCard.js';
import { DevProjectData } from '../data/Data.js'


function DevProjects() {
    
    const data = DevProjectData();
    
    return (
      <div id="dev-body">
      <div className="body page-body">
        <h1>Front-end/full stack <div className="unbold">development projects</div></h1>
        <div className="dev-projects">
        {
          data.map((item, index) => {
            return <div>
                <Card
                    key={ index }
                    component={ item.Component }
                    title={ item.Title }
                    highlightbold={ item.HighlightBold }
                    highlight={ item.Highlight }
                    tags={ item.Tags }
                    link={ item.Link }
                    linkTitle={ item.LinkTitle }
                    card="dev"
                />
            </div>
          })
        }
        </div>
      </div>
      </div>
    );
}

export default DevProjects;