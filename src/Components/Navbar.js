
import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react"

export default function Navbar(props) {
    const [currentPgIsHome, setCurrentPgIsHome] = useState("none")
    const [currentPageIsContact, setCurrentPgIsContact] = useState("none")

    const location = useLocation();

    useEffect(() => {
        if (window.location.pathname === "/"){
            setCurrentPgIsHome("underline")
            setCurrentPgIsContact("none")
        }
        else if (window.location.pathname === "/contact"){
            setCurrentPgIsContact("underline")
            setCurrentPgIsHome("none")
        }
      }, [location]);
        

    return (
        <>
            <nav style={props.darkLightModeNav} onClick={props.clicking}>
                <section className="rightSideNav">
                    <h1 style={props.darkLightModeText}>Text Tool Services</h1>
                    <div className="about">
                        <Link to="/" style={{textDecoration: currentPgIsHome, ...props.darkLightModeText}}>Home</Link>
                    </div>
                    <div className="contacts">
                        <Link to="/contact" style={{textDecoration: currentPageIsContact, ...props.darkLightModeText}}>Contact Us</Link>
                    </div>
                </section>
                <section className="leftSideNav">
                    <input type="checkbox" className="dark-light-mode-checkbox" aria-label="Choose to enable dark or light mode" />
                    <label htmlFor="dark-light-mode-label" className="dark-light-mode-toggle-label" onClick={props.enableDarkModeOnClick} style={props.backgroundColorDarkMode}>
                        <div className="dark-light-mode-enabled-circle" style={props.transitionCircle}></div>
                    </label>
                    <h4 style={props.darkLightModeText}>Enable {props.darkLightModeTextNav} Mode</h4>
                </section>
            </nav>
        </>
    )
}