import React from 'react';
import './SelfSummary.css';
import { makeTags } from '../data/Data.js'

import education from '../../media/About/education.png'
import equinix from '../../media/About/equinix.png'
import hcd from '../../media/About/hcd.png'
import research from '../../media/About/research.png'



function SelfSummary() {
    return (
        <div>
            <div className="row-2">
                <div className="row-3">
                    <div className="col">
                        <div className="summary-card">
                            <img src={education} className="summary-doodle"></img>
                            <h5><b>Information Systems</b> + <b>HCI</b> at Carnegie Mellon</h5>
                            <div className="featured-tags">{ makeTags("Development,Design") }</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="summary-card">
                            <img src={research} className="summary-doodle"></img>
                            <h5>Researching and designing at the&nbsp; 
                                <a target='_blank' href='https://dig.cmu.edu/'><b>DIG</b></a>,&nbsp;    
                                <a target='_blank' href='http://3.210.81.13/about_us'><b>CHIMPs</b></a>, and&nbsp; 
                                <a target='_blank' href='http://coexlab.com/'><b>CoEx</b></a> labs</h5>
                            <div className="featured-tags">{ makeTags("Research,Innovation") }</div>
                        </div>
                    </div>
                </div>
                <div className="row-3">
                    <div className="col">
                        <div className="summary-card">
                            <img src={hcd} className="summary-doodle"></img>
                            <h5>Teaching <b>Human Centered Design</b> at <a target='_blank' href='https://www.dfaxcmu.org/'>Design For America</a></h5>
                            <div className="featured-tags">{ makeTags("Leadership,Nonprofits") }</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="summary-card">
                            <img src={equinix} className="summary-doodle"></img>
                            <h5>Collaborated with stakeholders as a UX Designer at <a target='_blank' href='https://www.equinix.com/'><b>Equinix</b></a></h5>
                            <div className="featured-tags">{ makeTags("Industry Experience") }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelfSummary;