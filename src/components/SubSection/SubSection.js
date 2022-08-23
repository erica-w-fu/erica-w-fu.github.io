import React from "react";
import "./SubSection.css"
import {formatText} from '../data/Data.js'


/*  SubSection is a component that consistently styles header, text, and images within a section 
    used in Section of the detail view of each Project
*/

function SubSection(props) {
    console.log(props.imgType);
    return (
        <div className="subsection">
            <div className="subsection-body">
            {
                props.header === undefined 
                ?   <></>
                :   <div>
                        <h3>{ props.header }</h3>
                        <br></br>
                    </div>           
            }
            {
                props.body === undefined 
                ? <></>
                :   <div>
                        <p>{ formatText(props.body) }</p>
                        <br></br>
                    </div>  
            }
            </div>
            {
                props.img === undefined 
                ? <></>
                : 
                    <div>
                        <img 
                            src={ props.img } 
                            className={ props.imgType===undefined ? "subsection-img" : props.imgType }
                        >
                        </img>
                    </div>
            }
        </div>
    );
}
export default SubSection;
