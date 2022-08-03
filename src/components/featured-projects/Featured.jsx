import React, { useEffect, useState } from 'react'
import "./Featured.css";
import SingleProject from './SingleProject';
import { featuredProjects } from "../../assets/data/data.js";

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';


function Featured() {

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

            {isTimeUp && <div className="featured-container" id='featured-container'>

                <div className="section-topic" data-aos="fade-up">
                    <h2>My Featured Projects</h2>
                    <hr />
                </div>

                {featuredProjects.map((project, index) => {
                    return  <SingleProject key={index} flip={project.flip} project={project}/>
                })}
                


                {/* <SingleProject flip="true"/>
                <SingleProject flip="false"/>
                <SingleProject flip="true"/> */}

            </div>}

        </div>
    )
}

export default Featured