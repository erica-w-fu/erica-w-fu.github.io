import React from "react";
import "./Section.css"

/*  Section is a component that consistently styles sections with two columns, 
    used on the detail view of each Project
*/

function Section(props) {
    return (
        <div className="section-container" id={ props.id }>
            <div className="section-left">
                <h4>{ props.title }</h4>
            </div>
            <div className="section-right">
                { props.children }
            </div>
        </div>
    );
}
export default Section;
