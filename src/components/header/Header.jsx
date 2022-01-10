import { Link } from "react-scroll"
import React from "react"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar, active, abs_title, logo_container } from "./header.module.scss"
import "./components/burger.css"
import Logo from "../logo/Logo"
import DarkModeToggle from "../darkMode/DarkModeToggle"

const Header = () => {
  return (
    <div className={navbar}>
      <MediaQuery minWidth={870}>
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
        <DarkModeToggle />
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        <Link className={abs_title} to="/">
          PAU LARREA
        </Link>
        <Burger />
      </MediaQuery>
    </div>
  )
}

export default Header
