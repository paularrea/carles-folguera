import { Link } from "react-scroll"
import React from "react"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar, active, abs_title, logo_container } from "./header.module.scss"
import "./components/burger.css"
import Logo from "../logo/Logo"
import DarkModeToggle from "../darkMode/DarkModeToggle"

const Header = () => {
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
        <Link className={abs_title} to="/">
          PAU<br />LARREA
        </Link>
        <Burger />
      </MediaQuery>
    </div>
  )
}

export default Header
