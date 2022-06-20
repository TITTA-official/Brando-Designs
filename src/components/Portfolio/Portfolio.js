import React, { Fragment } from 'react';
import "./Portfolio.css"
import brandocPoster1 from '../../images/brandocflyer1.jpg';
import brandocPoster2 from '../../images/brandocflyer2.jpg';

function Portfolio() {
    return (
        <Fragment >
            <section  className="mh-portfolio" id="mh-portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title col-sm-12">
                            <h3>Recent Portfolio</h3>
                        </div>
                        <br /><br /><br /><br /><br />
                        <div className="part col-sm-12">
                            {/* Work on filter the images based on what was selected in the nav */}
                            <div className="portfolio-nav col-sm-12" id="filter-button">
                                <ul>
                                    <li data-filter="*" className="current">
                                        <span>All Categories</span>
                                    </li>
                                    <li data-filter=".user-interface">
                                        <span>Logo Designs</span>
                                    </li>
                                    <li data-filter=".branding" >
                                        <span>Flyer Designs</span>
                                    </li>
                                    <li data-filter=".mockup">
                                        <span>Cover Arts</span>
                                    </li>
                                    <li data-filter=".ui">
                                        <span>Others</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mh-project-gallery col-sm-12" id="project-gallery">
                                <div className="portfolioContainer row">
                                    <div className="grid-item col-md-4 user-interface">
                                        <figure>
                                            <img src={brandocPoster1} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">T.I.T.A</h5>
                                                <span className="sub-title">Logo Design</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 ui mockup">
                                        <figure>
                                            <img src={brandocPoster2} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Nike</h5>
                                                <span className="sub-title">Cover Art</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 ui mockup">
                                        <figure>
                                            <img src={brandocPoster1} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Domino's Pizza</h5>
                                                <span className="sub-title">Flyer Design</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 branding">
                                        <figure>
                                            <img src={brandocPoster2} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Coldstone</h5>
                                                <span className="sub-title">Flyer Design</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 user-interface">
                                        <figure>
                                            <img src={brandocPoster1} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Danny Song</h5>
                                                <span className="sub-title">Cover Art</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 branding">
                                        <figure>
                                            <img src={brandocPoster2} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Brandoc</h5>
                                                <span className="sub-title">Logo Design</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 ui">
                                        <figure>
                                            <img src={brandocPoster2} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Proclassics</h5>
                                                <span className="sub-title">Logo Design</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="grid-item col-md-4 branding">
                                        <figure>
                                            <img src={brandocPoster1} alt="pics" />
                                            <figcaption className="fig-caption">
                                                <i className="fa fa-search"></i>
                                                <h5 className="title">Creative Design</h5>
                                                <span className="sub-title">Cover Art</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Portfolio;
