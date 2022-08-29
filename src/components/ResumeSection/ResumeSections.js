import React from "react";
import "./ResumeSections.css";

/*  AlignedSection is a component that consistently styles sections with a left
    and right half
*/

function ResumeSections(props) {
    return (
        <div className="resume-section aligned-section" id={ props.id }>
            <div className="left-section">
                <div className={props.style}>{ props.title }</div>
                <h3>{ props.altTitle }</h3>
                <h4 className="accent">{ props.subTitle }</h4>
                <p>{ props.body }</p>
            </div>
            <div className="right-section">
                { props.children }
            </div>
        </div>
    );
}
export default ResumeSections;
