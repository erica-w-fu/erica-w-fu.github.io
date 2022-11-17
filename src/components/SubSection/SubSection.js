import React from "react";
import "./SubSection.css"
import {formatText} from '../data/Data.js'


// function to format a list to include numbers
function formatList(str) {
    if (!str) return str;

    // split strings by , and put them in <li>
    const lines = str.split("/");
    const final = []

    for (let line of lines) {
        final.push( <li>{line}</li> )

    }

    return final
}

// function to format quotes
function formatQuotes(str) {
    if (!str) return str;

    // split strings by / and put them in <li>
    const lines = str.split("/");
    const final = []

    for (let line of lines) {
        final.push( <p className="col">"{line}"</p> )

    }

    return final
}

/*  SubSection is a component that consistently styles header, text, and images within a section 
    used in Section of the detail view of each Project
*/

function SubSection(props) {

    return (
        <div className="subsection">
            {
                props.header === undefined 
                ?   <></>
                :   <div className="body-small">
                        <h3>{ props.header }</h3>
                    </div>           
            }
            {
                props.body === undefined 
                ? <></>
                :   <div className="body-small">
                        <br></br>
                        <p>{ formatText(props.body) }</p>
                    </div>  
            }
            {
                props.img === undefined 
                ? <></>
                : 
                    <div className="body-media">
                        <br></br>
                        <img 
                            src={ props.img } 
                            className="subsection-img"
                        >
                        </img>
                    </div>
            }
            {
                props.list === undefined 
                ? <></>
                : 
                    <div className="body-small">
                        <br></br>
                        <ol className="numbered-list">
                            { formatList(props.list) }
                        </ol>
                    </div>
            }
            {
                props.quotes === undefined 
                ? <></>
                : 
                    <div className="body-media">
                        <br></br>
                        <div className="subsection-quotes row">
                            { formatQuotes(props.quotes) }
                        </div>
                    </div>
            }
        </div>
    );
}
export default SubSection;
