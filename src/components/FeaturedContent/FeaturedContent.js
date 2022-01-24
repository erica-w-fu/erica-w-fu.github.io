import React from "react";
import "./FeaturedContent.css"

/*  FeaturedContent is a component that consistently styles sections with two columns, 
    used on the featured projects section of the home page.
*/

function FeaturedContent(props) {
    return (
        <div className="featured-content-container" id={ props.id }>
            <div className="featured-left">
                <h5>{ props.title }</h5>
            </div>
            <div className="featured-right">
                { props.children }
            </div>
        </div>
    );
}
export default FeaturedContent;
