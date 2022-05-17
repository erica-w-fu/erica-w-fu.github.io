import React from 'react';
import './PopUp.css'

function PopUp(props) {
    return (
        (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="small-btn popup-button" onClick={()=>props.setTrigger(false)}>
                        x
                    </button>
                    { props.children }
                </div>
            </div>
        ) : ""
    )
}

export default PopUp;