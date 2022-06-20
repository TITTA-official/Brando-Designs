import React from 'react';
import './App.css'
import Nav from './components/Navbar/Nav.js';
import Hero from './components/Hero/Hero.js';
import Service from './components/Work/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';


function App() {
    return (
        <div>
            <Nav/>
            <br /><br /><br /><br /><br />
            <Hero/>
            <br /><br /><br /><br /><br />
            <About />
            <br /><br /><br /><br /><br /><br />
            <Service />
            <br /><br /><br /><br /><br /><br /><br />
            <Portfolio />
            <br /><br /><br /><br /><br />
            <Pricing />
        </div>
    )
}

export default App;
