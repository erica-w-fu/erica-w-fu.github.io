import React from 'react';
import './PopUp.css'

function PopUp(props) {
    return (
        (props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <div className="close-btn" onClick={()=>props.setTrigger(false)}>
                        <h2>x</h2>
                    </div>
                    { props.children }
                </div>
            </div>
        ) : ""
    )
}

export default PopUp;