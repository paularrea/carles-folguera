import React, { useState } from "react"
import { Link } from "react-scroll"
import { active } from "../header.module.scss"
import { slide as Menu } from "react-burger-menu"
import DarkModeToggle from "../../darkMode/DarkModeToggle"

const Burger = props => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={state => handleStateChange(state)}
      {...props}
    >
      <div>
        <DarkModeToggle />
      </div>
      <br />
      <Link
        activeClass={active}
        to="projects"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1000}
        onClick={closeMenu}
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
        onClick={closeMenu}
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
        onClick={closeMenu}
      >
        Contact
      </Link>
    </Menu>
  )
}

export default Burger
