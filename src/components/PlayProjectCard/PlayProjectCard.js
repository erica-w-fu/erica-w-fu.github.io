import React, {useState} from 'react';
import '../../App.css';
import './PlayProjectCard.css';

function PlayProjectCard({title, tags, year, description, image, awards, selectedCategory}) {

    return (
        <div className="play-project-container bordered-section">
            <img
                src={image}
                alt=""
                loading="lazy"
                className="project-bg-img"
            />

            <div className="play-project-desc">
                <div style={{ gap: '8px' }}>
                <div className="flex-row" style={{ justifyContent: "space-between" }}>
                    <p className="play-project-title"><strong>{title}</strong></p>
                    <small className="subdued">{year}</small>
                </div>
                <div className="spacer-4"></div>
                <div className="play-project-tag">
                    {tags.map((tag) => (
                    <small key={tag} className="caption subdued">
                        {tag}<br />
                    </small>
                    ))}
                </div>
                </div>

                {awards && <small>{awards}</small>}
                <small className="subdued">{description}</small>
            </div>
        </div>
    );
}

export default PlayProjectCard;