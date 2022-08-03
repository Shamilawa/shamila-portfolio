import React, { useState, useEffect } from 'react'
import "./Projects.css";
import { olderProjets } from "../../assets/data/data.js";

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import TableData from './TableData';

function Projects() {

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

            {isTimeUp && <div className="old-project-container" data-aos="fade-up">

                <div className="section-topic">
                    <h2>All Projects</h2>
                    <hr />
                </div>

                <p className="sub-heading">All the projects (big, small and failed ones) I’ve worked on</p>

                <div className="table-heading">
                    <p className="table-columns year">Year</p>
                    <p className="table-columns title">Project Title</p>
                    <p className="table-columns category">Project Category</p>
                    <p className="table-columns technologies">Technologies</p>
                    <p className="table-columns links">Links</p>
                </div>

                {olderProjets.map((project, index) => {
                    return (
                        <TableData
                            key={index}
                            year={project.year}
                            name={project.projectName}
                            category={project.projectCategory}
                            technologies={project.skills}
                            github={project.repoUrl}
                            link={project.url}
                        />
                    )
                })

                }

            </div>}

        </div>
    )
}

export default Projects