import React, { useEffect, useState } from 'react'
import "./CallToAction.css"

// Reveal on the scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function CallToAction() {

    const [isTimeUp, setIsTimeOut] = useState(false);

    // Bulb entrance timeout
    setTimeout(() => {
        setIsTimeOut(true);
    }, 2500)

    return (
        <div className="container">

            {isTimeUp && <div className="call-to-action-container" data-aos="fade-up" id='call-to-action-container'>
                <p className='slogan'>Looks interesting, right?</p>
                <h3 className="call-to-action-heading">Get In Touch</h3>
                <a className='call-to-action-email' href="mailto:Shamilawasalagedarafx@gmail.com"><p>Shamilawasalagedarafx@gmail.com</p></a>
                <p className="call-to-action-description">Currentyl I’m seeking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div> }

        </div>
    )
}

export default CallToAction