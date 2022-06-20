import React, { Fragment } from 'react';
import './About.css'
import brandocPoster1 from '../../images/brandocflyer1.jpg';

function About() {
    return (
        <Fragment >
            <section id="about"  className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><img src={brandocPoster1} alt="About pics" /></div>
                        <div className="col-md-5 text-white gap">
                            <br /><br /><br /><br />
                            <h2>About Us</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi nemo qui praesentium, magni laboriosam.</p>
                            <br />

                            <div className="tag">
                                <ul>
                                    <li><span>Logo Designs</span></li>
                                    <li><span>Flyer Designs</span></li>
                                    <li><span>Photo Editing</span></li>
                                    <li><span>Thumbnails</span></li>
                                    <li><span>Cover Art</span></li>
                                </ul>
                            </div>
                            <br />
                            <div className="download-button">
                                <a href="#" className="btn btn-danger">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
