import React, {useEffect, useState} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CarImage from "../../assets/car.jpg"
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
                <p className="project-category">Personal Project</p>
                <h4 className="project-title"> <a href="#">Full Stack Blog With Authentication</a></h4>
                <div className="project-inner-content" style={isLeft === "true" ? {width: "auto", paddingRight:"15px"} : null}>
                    <p className="project-description" style={isLeft === "true" ? {padding: "15px 0 15px 50px"} : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra tempor mi vel posuere. Duis ultricies, tortor et fringilla faucibus, neque tellus cursus nunc, non vehicula nulla ex et sem. Ut eget risus auctor elit pretium laoreet. Maecenas rutrum et ante at suscipit. Proin ac tellus feugiat, auctor est non, ullamcorper ante</p>
                    <p className="project-highlighted-txt">Used technologies</p>
                    <div className="project-technologies">
                        <p>JavaScript</p>
                        <p>HTML & CSS</p>
                        <p>Node. js</p>
                        <p>Express. js</p>
                        <p>MondoDB</p>
                    </div>
                    <div className="project-icons" >
                        <a href="#"><GitHubIcon className='icons' style={isLeft === "true" ? {paddingRight:"0", paddingLeft:"20px"} : null} /></a>
                        <a href="#"><LaunchIcon className="icons" style={isLeft === "true" ? {paddingRight:"0", paddingLeft:"20px"} : null}/></a>
                    </div>
                </div>
            </div>

            <div className="project-img" style={{backgroundImage : "url(http://localhost:3000/static/media/car.f0c58564320f8807f762.jpg)"}}></div>

        </div>
    )
}

export default SingleProject