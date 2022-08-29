import React from "react";
import "./Section.css"

/*  Section is a component that consistently styles sections with two columns, 
    used on the detail view of each Project
*/

function Section(props) {
    return (
        <>
        <div className="section-container">
            <h4 className="body-small">{ props.title }</h4>
            { props.children }
        </div>
        </>
    );
}
export default Section;
