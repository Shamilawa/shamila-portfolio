import React, { useEffect, useState } from "react";
import "./Work.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { workingExperiences } from "../assets/data/data.js";

// Reveal on the scroll
import AOS from "aos";
import "aos/dist/aos.css";

function Work() {

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
                <div className="work-container" data-aos="fade-up" id="work-container">
                    <div className="section-topic">
                        <h2>Working Experience</h2>
                        <hr />
                    </div>

                    <div className="work-grid">
                        {workingExperiences.map((work, index) => {
                            return (
                                <div className="work-card" key={index}>
                                    <p className="card-header">{work.companyName}</p>
                                    <div className="inner-div">
                                        <h4 className="card-title">
                                            {work.position}{" "}
                                            <a href={work.siteUrl} target="_blank">@ {work.companyName}</a>
                                        </h4>
                                        <p className="time">{work.workTime}</p>
                                        {work.descriptions.map((description, index) => {
                                            return (
                                                <div className="work-details" key={index}>
                                                    <ArrowRightIcon className="arrow-right" />
                                                    <p>{description}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
