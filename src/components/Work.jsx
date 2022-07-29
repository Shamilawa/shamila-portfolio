import React, { useEffect, useState } from 'react'
import "./Work.css"
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function Work() {

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

            {isTimeUp && <div className="work-container" data-aos="fade-up">

                <div className="section-topic">
                    <h2>Working Experience</h2>
                    <hr />
                </div>

                <div className="work-grid">

                    <div className="work-card">
                        <p className="card-header">Ph Green House</p>

                        <div className="inner-div">
                            <h4 className='card-title'>WordPress Developer <a href="http://phgreenhouse.com">@ PH Green House</a></h4>
                            <p className="time">2020 - 2021 December</p>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Developed a wordpress website from a scratch with modern UI/UX design.</p>
                            </div>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Worked with elementor with hello theme to build engaging and responsive pages across the whole website.</p>
                            </div>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Followed best WordPress security practises when website contantly get updated.</p>
                            </div>

                        </div>

                    </div>

                    <div className="work-card">
                        <p className="card-header">Trade Revenue Pro</p>
                        <div className="inner-div">

                            <h4 className='card-title'>WordPress Developer <a href="https://traderevenuepro.com">@ Trade Revenue Pro</a></h4>
                            <p className="time">2020 - 2021 December</p>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Developed a wordpress website from a scratch with modern UI/UX design.</p>
                            </div>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Worked with elementor with hello theme to build engaging and responsive pages across the whole website.</p>
                            </div>

                            <div className="work-details">
                                <ArrowRightIcon className="arrow-right" />
                                <p>Followed best WordPress security practises when website contantly get updated.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>}

        </div>
    )
}

export default Work