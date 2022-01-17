import { Link } from "react-scroll"
import React from "react"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { logo, navbar, active, logo_container } from "./header.module.scss"
import "./components/burger.css"
import Logo from "../logo/Logo"
import DarkModeToggle from "../darkMode/DarkModeToggle"

const Header = ({pageWrapId, outerContainerId}) => {
  const isInProject = window.location.href.indexOf("projects") > -1
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
        <Logo />
      </div>
    </Link>
  )
  const homeLink = (
    <a href="/">
      <Logo />
    </a>
  )

  return (
    <div className={navbar}>
      <MediaQuery minWidth={870}>
        {isInProject ? homeLink : scrollToTop}
        {!isInProject && nav}
        <DarkModeToggle />
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        <Link to="/">
          <h2 className={logo}>
            PAU
            <br />
            LARREA
          </h2>
        </Link>
        <Burger pageWrapId={pageWrapId} outerContainerId={outerContainerId} />
      </MediaQuery>
    </div>
  )
}

export default Header
