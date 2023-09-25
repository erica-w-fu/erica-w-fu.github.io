import React from 'react';
import './SelfSummary.css';
import { makeTags } from '../data/Data.js'

import education from '../../media/About/education.png'
import equinix from '../../media/About/equinix.png'
import hcd from '../../media/About/hcd.png'
import research from '../../media/About/research.png'



function SelfSummary() {
    return (
        <div className="self-summary-container">
            <div className="row-2">
                <div className="row-3">
                    <div className="col">
                        <div className="summary-card">
                            <img src={education} className="summary-doodle"></img>
                            <h5>Studying HCI + Information Systems at Carnegie Mellon</h5>
                            <div className="featured-tags">{ makeTags("Development,Design") }</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="summary-card">
                            <img src={research} className="summary-doodle"></img>
                            <h5>Researching and designing at the&nbsp; 
                                <a target='_blank' href='https://dig.cmu.edu/'>DIG</a>,&nbsp;    
                                <a target='_blank' href='http://3.210.81.13/about_us'>CHIMPs</a>, and&nbsp; 
                                <a target='_blank' href='http://coexlab.com/'>CoEx</a> labs</h5>
                            <div className="featured-tags">{ makeTags("Research,Innovation") }</div>
                        </div>
                    </div>
                </div>
                <div className="row-3">
                    <div className="col">
                        <div className="summary-card">
                            <img src={hcd} className="summary-doodle"></img>
                            <h5>Teaching Human Centered Design at <a target='_blank' href='https://www.dfaxcmu.org/'>Design For America</a></h5>
                            <div className="featured-tags">{ makeTags("Leadership,Nonprofits") }</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="summary-card">
                            <img src={equinix} className="summary-doodle"></img>
                            <h5>Formerly designing experiences at <a target='_blank' href='https://www.equinix.com/'>Equinix</a></h5>
                            <div className="featured-tags">{ makeTags("Industry Experience") }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelfSummary;