import React, {useEffect, useState} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import "./SingleProject.css"

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function SingleProject(props) {
    

        const [isLeft, setIsLeft] = useState(props.flip)

        // Reveal on Scroll
        useEffect(() => {
            AOS.init({ duration: 1000 });
        }, [])

    return (
        <div className="project-card" style={isLeft === "true" ? {flexDirection: "row-reverse", textAlign: "right"} : null} data-aos= "fade-up">

            <div className="project-content">
                <p className="project-category">{props.project.category}</p>
                <h4 className="project-title"> <a href={props.project.projectUrl} target="_blank">{props.project.projectName}</a></h4>
                <div className="project-inner-content" style={isLeft === "true" ? {width: "auto", paddingRight:"15px"} : null}>
                    <p className="project-description" style={isLeft === "true" ? {padding: "15px 0 15px 50px"} : null}>{props.project.description}</p>
                    <p className="project-highlighted-txt">Used technologies</p>
                    <div className="project-technologies">
                    {props.project.skills.map((skill, index) => {
                        return (
                        <p key={index}>{skill}</p>
                        )
                    })}
                    </div>


                    <div className="project-icons" >
                        <a href={props.project.repoUrl} target="_blank"><GitHubIcon className='icons' style={isLeft === "true" ? {paddingRight:"0", paddingLeft:"20px"} : null} /></a>
                        <a href={props.project.projectUrl} target="_blank"><LaunchIcon className="icons" style={isLeft === "true" ? {paddingRight:"0", paddingLeft:"20px"} : null}/></a>
                    </div>
                </div>
            </div>

            <div className="project-img" style={{backgroundImage : `url(${props.project.imgUrl})`}}></div>

        </div>
    )
}

export default SingleProject