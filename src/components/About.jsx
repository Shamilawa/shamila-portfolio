import React, { useEffect, useState } from "react";
import "./About.css";
import AboutImage from "../assets/about-me-img.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {skills} from "../assets/data/data.js"

// Reveal on the scroll
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  const [isTimeUp, setIsTimeOut] = useState(false);

  // Bulb entrance timeout
  setTimeout(() => {
    setIsTimeOut(true);
  }, 2500);

  // Reveal on Scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      {isTimeUp && (
        <div className="about-container" data-aos="fade-up" id="about-container">
          <div className="about-me-image">
            <img src={AboutImage} alt="my image" />
          </div>

          <div className="about-me-content">
            <div className="section-topic">
              <h2>About Me</h2>
              <hr />
            </div>
            <p>
              Hello! My name is Shamila Hasaranga, an undergraduate student.
              Designing and developing digital experiences and products has
              always been a passion of mine since I was in school.
            </p>
            <p>
              My career as a software developer began in 2014 when I discovered
              the Unity3D gaming engine. I created a couple of games back then,
              which helped me learn the game development side of things as well
              as computer programming, specifically C#. Yep, that is my first
              programming language.
            </p>
            <p>
              Fast forward to today, I am capable of developing full-stack
              websites using the latest web technologies such as Node js and
              React js. In addition, I've had the opportunity to work with the
              PH Green House, which has allowed me to learn more about one of
              the world's most popular CMS, WordPress.
            </p>
            <p>
              These days, I'm working hard to learn about mobile app
              development, which I believe is a valuable skill to have in my
              portfolio. Also, I'm planning to complete my degree in software
              engineering in 2023.{" "}
            </p>
            <p className="highlighted-text">
              Technologies I’ve been working with recently
            </p>

            <div className="skill-grid-container">

              {skills.map((skill, index) => {
                return (
                  <div className="skill"  key={index}>
                    <ArrowRightIcon className="arrow-right" />
                    <p>{skill}</p>
                  </div>
                )

              })}

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default About;
