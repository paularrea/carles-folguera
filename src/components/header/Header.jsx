import { Link } from "react-scroll"
import React, { useEffect, useState } from "react"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { logo, navbar, active, logo_container } from "./header.module.scss"
import "./components/burger.css"
import Logo from "../logo/Logo"
import DarkModeToggle from "../darkMode/DarkModeToggle"
import CloseButton from "../buttons/close"

const Header = ({
  pageWrapId,
  outerContainerId,
  changeMode,
  setChangeMode,
}) => {
  const nav = (
    <nav>
      <Link
        activeClass={active}
        to="projects"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        Projects
      </Link>
      <Link
        activeClass={active}
        to="about"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        About
      </Link>
      <Link
        activeClass={active}
        to="contact"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
      >
        Contact
      </Link>
    </nav>
  )

  const scrollToTop = (
    <Link
      activeClass={active}
      to="intro"
      spy={true}
      smooth={true}
      offset={-40}
      duration={1000}
    >
      <div className={logo_container}>
        <Logo changeMode={changeMode} />
      </div>
    </Link>
  )

  return (
    <div className={navbar}>
      <MediaQuery minWidth={870}>
        {scrollToTop}
        {nav}
        <DarkModeToggle setChangeMode={setChangeMode} />
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        {scrollToTop}
        <Burger
          setChangeMode={setChangeMode}
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
        />
      </MediaQuery>
    </div>
  )
}

export default Header
