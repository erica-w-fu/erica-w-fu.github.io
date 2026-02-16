import React from 'react';
import './TextBlocks.css'

const KeyValue = ({ caption, text, captionClass = ''}) => {

  return (
    <div>
        <small className={`caption subdued ${captionClass}`}>
            {caption}
        </small>
        <div className="spacer-8"></div>
        <small style={{ whiteSpace: 'pre-line' }}>
            {text}
        </small>
    </div>
  );
};

const IconBullet = ({ img, text}) => {
  return (
    <div className="icon-bullet">
      <h5 className="icon-bullet-img">{img}</h5>
      <span className="icon-bullet-text"><h5>{text}</h5></span>
    </div>
  );
};

const IconBulletSmall = ({ img, text }) => {
  return (
    <div className="icon-bullet-small">
      <span className="icon-bullet-img">{img}</span>
      <span><small>{text}</small></span>
    </div>
  );
};

const Block = ({ caption, title, body, captionClass = '' }) => {
  return (
    <div>
      <p className={`caption subdued ${captionClass}`}>
        {caption}
      </p>
      <div className="spacer-8"></div>
      <h5>{title}</h5>
      {body ? (
        <>
          <div className="spacer-16"></div>
          <p>{body}</p>
        </>
      ) : null}
    </div>
  );
};


const BlockSemiEmphasis = ({ caption, title, body, color = 'inherit'}) => {

  return (
     <div>
      <div style={{ color }}>
          <p className="caption subdued" style={{ color }}>
            {caption}
          </p>
          <div className="spacer-8"></div>
          <h3>
            {title}
          </h3>
          {body ? (
          <>
            <div className="spacer-32"></div>
            <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

const BlockEmphasis = ({ caption, title, body }) => {

  return (
    <div>
        <p className="caption subdued">
          {caption}
        </p>
        <div className="spacer-16"></div>
        <h2>
          {title}
        </h2>
       {body ? (
        <>
          <div className="spacer-24"></div>
          <p>{body}</p>
        </>
      ) : null}
    </div>
  );
};

const BlockImg = ({ title, img, body }) => {

  return (
     <div>
      <h5>{title}</h5>
      <div className="spacer-16"></div>
      <img src={img} alt="" style={{width:"100%"}}/>
      <div className="spacer-16"></div>
      {Array.isArray(body) ? (
        <ul>
          {body.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <small>{body}</small>
      )}
    </div>
  );
};

const TakeawayBlock = ({ caption="",title, body}) => {

  return (
    <div className="takeaway-row">
      <div className="takeaway-title">
        <p className="caption subdued">
          {caption==="" ? "Takeaway" : caption}
        </p>
        <div className="spacer-8"></div>
        <h4><strong>{title}</strong></h4>
      </div>
      <div className="takeaway-body">
          {body ? (
          <>
            <p>{body}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

const ProjectDetails = ({role, collaborators, timeframe, companySize, captionClass = '', styleClass=''}) => {
  
  return (
    <>
    { styleClass === 'condensed' 
      ? 
        <div className="flex-row flex-row-no-collapse" style={{gap: '24px'}}>
          <div className = "flex-item">
              <KeyValue
                  caption = "My role"
                  text = {role}
                  captionClass = {captionClass}
              />
          </div>
          <div className = "flex-item">
              <KeyValue
                  caption = "Team"
                  text = {collaborators}
                  captionClass = {captionClass}
              />
          </div>
          <div className = "flex-item">
              <KeyValue
                  caption = "Timeframe"
                  text = {timeframe}
                  captionClass = {captionClass}
              />
          </div>
        </div>
      :
        <div className="flex-row quad-row">
            <div className = "flex-item">
              <KeyValue
                  caption = "My role"
                  text = {role}
                  captionClass = {captionClass}
              />
            </div>
            <div className = "flex-item">
                <KeyValue
                    caption = "Team"
                    text = {collaborators}
                    captionClass = {captionClass}
                />
            </div>
            <div className = "flex-item">
              <KeyValue
                  caption = "Timeframe"
                  text = {timeframe}
                  captionClass = {captionClass}
              />
            </div>
            <div className = "flex-item">
              <KeyValue
                  caption = "Company size"
                  text = {companySize}
                  captionClass = {captionClass}
              />
            </div>
        </div>
    }
    </>
    )
  }

export { KeyValue, IconBullet, IconBulletSmall, Block, BlockSemiEmphasis, BlockEmphasis, BlockImg, TakeawayBlock, ProjectDetails };

