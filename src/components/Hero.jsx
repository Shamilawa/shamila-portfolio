import React, { useState } from "react";
import "./Hero.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typewriter from 'typewriter-effect';
import Person from "../assets/hero-images/Person.png"
import Tree from "../assets/hero-images/Tree.png"
import Fan from "../assets/hero-images/Fan.png"
import FanSpinner from "../assets/hero-images/Fan Spinner.png"
import Bulb from "../assets/hero-images/Bulb.png"
import BulbFlick from "../assets/hero-images/Bulb-flick.png"
import Leave1 from "../assets/hero-images/leave1.png"
import Leave2 from "../assets/hero-images/Leave2.png"

function Hero() {

    const [isTimeUp, setIsTimeOut] = useState(false);
    const [isFlickTime, setIsFlickTime] = useState(false);

    // Bulb entrance timeout
    setTimeout(() => {
        setIsTimeOut(true);
    }, 700)

    // bulb flick timeout
    setTimeout(() => {
        setIsFlickTime(true);
    }, 2500)


    return (
        <div className="container">

            {isTimeUp && <img src={Bulb} alt="person sittings" className="bulb-img" />}
            {isFlickTime && <img src={BulbFlick} alt="person sittings" className="bulb-flick-img" />}

            {isTimeUp && <div className="hero-container">
                <div className="social-icons-container">
                    <EmailIcon className="social-icons" fontSize="small" />
                    <FacebookIcon className="social-icons" fontSize="small" />
                    <LinkedInIcon className="social-icons" fontSize="small" />
                    <InstagramIcon className="social-icons" fontSize="small" />
                </div>

                <div className="hero-content">
                    <p className="greet">Hola, my name is</p>
                    <h1>Shamila Hasaranga.</h1>
                    <div className="animated-container">
                        <Typewriter
                            options={{
                                strings: ['A Web Developer.', 'A Game Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="description">
                        I’m a software engineer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I’m focused on
                        building accessible, human-centered products at Upstatement.
                    </p>
                    <div className="call-to-action">

                        <span>Let's talk</span>
                    </div>
                </div>

                <div className="welcome">
                    <img src={Person} alt="person sittings" className="person-img" />
                    <img src={Tree} alt="person sittings" className="tree-img" />
                    <img src={Fan} alt="person sittings" className="fan-img" />
                    <img src={FanSpinner} alt="person sittings" className="fan-spinner-img" />
                    <img src={Leave1} alt="person sittings" className="leave1-img" />
                    <img src={Leave2} alt="person sittings" className="leave2-img" />
                </div>
            </div>}

        </div>
    );
}

export default Hero;
