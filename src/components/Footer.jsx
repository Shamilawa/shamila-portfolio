import React, { useState } from 'react'
import "./Footer.css"

function Footer() {

    const [isTimeUp, setIsTimeOut] = useState(false);

    // Bulb entrance timeout
    setTimeout(() => {
        setIsTimeOut(true);
    }, 2500)

    return (
        <div className="container">

            {isTimeUp && <div className="footer-container" >
                <p>Designed & Developed by Shamila Hasaranga</p>
                <p>Inspired By <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a></p>
            </div> }

        </div>
    )
}

export default Footer