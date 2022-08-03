import React, { useState } from 'react'
import Logo from "../assets/logo-image.png"
import "./Navbar.css"

function Navbar() {
    // states
    const [isHamburgerClick , setIsHamburgerClick] = useState(false)

    function handleClick() {
        setIsHamburgerClick(!isHamburgerClick)
    }


    // button style
    const styles = {
        one: {
            position: "relative",
            top: "7px",
            padding: "0",
            transform: "rotate(45deg)"
        },
        two: {
            transform: "rotate(-45deg)",
            padding: "0"
        },
        three: {
            opacity: "0"
        },
        mobileMenu: {
            marginRight: "0"
        }
    }

    return (
        <div className='container nav-container'>
            <div className="logo">
                <img src={Logo} alt="header logo" />
            </div>
            <nav className='nav-bar'>
                <ul className='menu'>
                    <a href="#about-container"><li className='linkOne'>About</li></a>
                    <a href="#work-container"><li className='linkTwo'>Experience</li></a>
                    <a href="#featured-container"><li className='linkThree'>Projects</li></a>
                    <a href="#call-to-action-container"><li className='linkFour'>Contact</li></a>
                    <a href="https://drive.google.com/file/d/1bbuky4R2i-rU2UEiIxnV-i6U9eRD1M4k/view" target="_blank"><button>Resume</button></a>
                </ul>
                <ul className='mobile-menu' style={isHamburgerClick ? styles.mobileMenu : null}>
                    <a href="#about-container"><li> About</li></a>
                    <a href="http://"><li> Experience</li></a> 
                    <a href="http://"><li> Work</li></a> 
                    <a href="http://"><li> Contact</li></a> 
                    <button>Resume</button>
                </ul>
            </nav>
            <div className='hamburger-menu' onClick={handleClick}>
                <div className='dash one' style={isHamburgerClick ? styles.one : null}></div>
                <div className='dash two' style={isHamburgerClick ? styles.two : null}></div>
                <div className='dash three' style={isHamburgerClick ? styles.three : null}></div>
            </div>
        </div>
    )
}

export default Navbar