import React, {Fragment} from 'react';
import "./Pricing.css";

function Pricing() {
    return (
        <Fragment  >
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-white text-left">
                            <h3>Pricing Table</h3>
                        </div>
                        <br /><br /><br /><br /><br /><br />
                        <div className="col-md-4">
                            <div className="pricing dark-bg">
                                <i className="fa fa-calendar"></i>
                                <h4>Full-time work</h4>
                                <p>i am available for full time</p>
                                <h5>#100,000</h5>
                                <ul>
                                    <li>Graphics Design</li>
                                    <li>Flyer Designs</li>
                                    <li>Logo Designs and Branding</li>
                                    <li>Photo Editing</li>
                                    
                                </ul>
                                <a href="" className= "btn btn-fill">Hire me</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing dark-bg">
                                <i className="fa fa-file"></i>
                                <h4>Fixed Price Project</h4>
                                <p>i am available for fixed price roles</p>
                                <h5>#100,000</h5>
                                <ul>
                                <li>Graphics Design</li>
                                    <li>Flyer Designs</li>
                                    <li>Logo Designs and Branding</li>
                                    <li>Photo Editing</li>
                                    
                                </ul>
                                <a href="" className= "btn btn-fill">Hire me</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing dark-bg">
                                <i className="fa fa-file"></i>
                                <h4>Hourly Work</h4>
                                <p>i am available for Hourly Projects</p>
                                <h5>#3,500</h5>
                                <ul>
                                <li>Graphics Design</li>
                                    <li>Flyer Designs</li>
                                    <li>Logo Designs and Branding</li>
                                    <li>Photo Editing</li>
                                    
                                </ul>
                                <a href="" className= "btn btn-fill">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Pricing
