import React, { Fragment } from 'react';
import brandocPoster2 from '../../images/brandocflyer2.jpg';
import "./Hero.css";

function Hero() {
    return (
        <Fragment>
            <section class="home container text-white">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-text">
                            <span className="title">Welcome to</span><br />
                            <span className="name">BRANDO</span> <br />
                            <span className="designation">Breathing life to your brand</span> <br />
                            <span className="email"><i className="fa fa-envelope"></i>brando@gmail.com</span>
                            <br />
                            <span className="phone"><i className="fa fa-phone"></i>08051131861</span>
                            <div className="social-icons d-flex">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="hero-img">
                            <div className="img-border">
                                <img src={brandocPoster2} alt="brandoc" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Hero
