"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import '../globals.css'

const NavBar = () => {
    const [isHome, setHome] = useState(true);
    const [isAbout, setAbout] = useState();
    const [isPortfolio, setPortfolio] = useState();

    const handleMenuClick = (event) => {
        let menuId = event.currentTarget.id;
        if (menuId === "home"){
            setHome(true);
            setAbout(false);
            setPortfolio(false);
        }
        else if (menuId === "about"){
            setHome(false);
            setAbout(true);
            setPortfolio(false);
        }
        if (menuId === "portfolio"){
            setHome(false);
            setAbout(false);
            setPortfolio(true);
        }
    }

  return (
    <div className="container">
        <div className="navBarContainer">
            <div className="logo">RICHARD ALVARADO</div>
            <div className="menuContainer">
                <p onClick={handleMenuClick} className={isHome ? "navMenu navMenuActive" : "navMenu"} id='home'><Link href={"/"}>Home</Link></p>
                <p onClick={handleMenuClick} className={isAbout ? "navMenu navMenuActive" : "navMenu"} id='about'><Link href={"About"}>About</Link></p>
                <p onClick={handleMenuClick} className={isPortfolio ? "navMenu navMenuActive" : "navMenu"} id='portfolio'><Link href={"Portfolio"}>Portfolio</Link></p>
                <div className="accentBar"></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar;