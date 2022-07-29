import React, { useEffect, useState } from "react";
import "./About.css";
import AboutImage from "../assets/about-me-img.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  const [isTimeUp, setIsTimeOut] = useState(false);

  // Bulb entrance timeout
  setTimeout(() => {
    setIsTimeOut(true);
  }, 2500)

  // Reveal on Scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (

    <div className="container">

      {isTimeUp && <div className="about-container" data-aos="fade-up">

        <div className="about-me-image">
          <img src={AboutImage} alt="my image" />
        </div>

        <div className="about-me-content">
          <div className="section-topic">
            <h2>About Me</h2>
            <hr />
          </div>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible,{" "}
          </p>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional
          </p>
          <p>I’m a software engineer specializing in building </p>
          <p className="highlighted-text">
            Technologies I’ve been working with recently{" "}
          </p>

          <div className="skill-grid-container">
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>HTML & CSS</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>Node. js</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>React</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>MondoDB</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>WordPress</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>C#</p>
            </div>
            <div className="skill">
              <ArrowRightIcon className="arrow-right" />
              <p>Unity 3D</p>
            </div>
          </div>
        </div>
      </div>}
    </div>

  );
}

export default About;
