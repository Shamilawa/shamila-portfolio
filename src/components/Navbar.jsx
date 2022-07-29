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
                    <li className='linkOne'>About</li>
                    <li className='linkTwo'>Experience</li>
                    <li className='linkThree'>Work</li>
                    <li className='linkFour'>Contact</li>
                    <button>Resume</button>
                </ul>
                <ul className='mobile-menu' style={isHamburgerClick ? styles.mobileMenu : null}>
                    <li> About</li>
                    <li> Experience</li>
                    <li> Work</li>
                    <li> Contact</li>
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