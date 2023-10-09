import React, {useState, useEffect} from "react";
import "./Navbar.css"
import Img from "../../Assets/low logo orange.png"
import { NavLink } from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io"

export default function Navbar(){

    const [currentLink, setCurrentLink] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };
    
        const hamburger = document.querySelector(".hamburger");
    
        hamburger.addEventListener("click", toggleMenu);
    
        return () => {
          hamburger.removeEventListener("click", toggleMenu);
        };
      }, [isMenuOpen]);

    return(
        <>
            <div className="navbar">
                <div className={`hamburger ${isMenuOpen ? "actived" : ""}`}>
                <span className="bar"></span>
                <span className="bar"></span> 
                <span className="bar"></span> 
                </div>
                <div className="head-link">
                 <ul className={`nav-ul ${isMenuOpen ? "actived" : ""}`}>
                    <li className={currentLink === 2 ? "active" : "none"} onClick={() => setCurrentLink(2)}>
                        <NavLink to="/" className="nav-item">
                            ACCUEIL
                        </NavLink>
                    </li>
                    <li className={currentLink === 3 ? "active" : "none"} onClick={() => setCurrentLink(3)}>
                        <NavLink className="nav-item">NOS SERVICES</NavLink>
                    </li>
                    <li className={currentLink === 4 ? "active" : "none"} onClick={() => setCurrentLink(4)}>
                        <NavLink className="nav-item">
                            A PROPOS {/*<IoIosArrowDown className="drop-link" />*/}
                        </NavLink>
                        {/*
                        <ul>
                            <li className="linkin" onClick={() => setCurrentLink(4)}> <NavLink>Pourquoi data4know ?</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(4)}><NavLink>Découvrir data4know</NavLink></li>
                        </ul>
                        */}
                    </li>
                    <li className={currentLink === 5 ? "active" : "none"} onClick={() => setCurrentLink(5)}>
                        <NavLink className="nav-item">VENTE</NavLink>
                    </li>
                    <li className={currentLink === 6 ? "active" : "none"} onClick={() => setCurrentLink(6)}>
                        <NavLink className="nav-item">BLOG</NavLink>
                    </li>
                    <li className={currentLink === 7 ? "active" : "none"} onClick={() => setCurrentLink(7)}>
                        <NavLink className="nav-item">CONTACT</NavLink>
                    </li>
                 </ul>
                </div>
                <div className="contact">
                    <p>Contactez nous au : </p>
                    <h2>+1 676879896875</h2>
                </div>
            </div>
            <div className="img-logo">
                <img src={Img} alt="Data4know-img" />
            </div>
        </>
    );
}