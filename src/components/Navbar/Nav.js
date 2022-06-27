import React, {Fragment,useState, useEffect} from 'react';
import './Nav.css';
import fb from './images/fb.png'; 
import tw from './images/tw.png'; 
import ig from './images/ig.png';
import TITTA from './images/TITTA.png';

import brandocLogo from '../../images/brandocwhite.png';

function Nav() {
    const [isToggled, setIsToggled] = useState(false);
    const [sc, setSc] = useState(0);

    function setScroll() {
        setSc(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll',setScroll);
      }, );

    return (
        <Fragment>
            <header className={`header ${sc > 30 ? 'sticky' : null }`}>
                <div className="wrap d-flex">
                    <h1 className="logo">
                        <a href="#"><img src={brandocLogo} alt="Brandoc Logo" /></a>
                    </h1>
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#mh-portfolio">Gallery</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </nav>
                </div>
                <a href="javascript:void(0);" className="sidemenu-toggler" onClick={() => setIsToggled(!isToggled)}>
                    <span></span><span></span><span></span>
                </a>

                <div className={`sidemenu ${isToggled ? 'active' : null}`}>
                    <a onClick={() => setIsToggled(!isToggled)} href="javascript:void(0);" className="close"></a>
                    <nav>
                        <ul>
                        <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#mh-portfolio">Gallery</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </nav>
                    <footer>
                    <div className="social">
                        <a href=""><img src={fb} alt="fb" /></a>
                        <a href=""><img src={tw} alt="TW"/></a>
                        <a href=""><img src={ig} alt="IG"/></a>
                    </div>
                    <div className="owned">
                        <p>Designed By</p>
                        <img src={TITTA} alt="titta logo" width="80px" className="titta"/>
                    </div>
                    
                    
                    </footer>
                </div>

            </header>
        </Fragment>
    )
}

export default Nav
