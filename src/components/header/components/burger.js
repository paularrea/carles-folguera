import React from "react"
import { Link } from "gatsby"
import { active } from "../header.module.scss"
import { slide as Menu } from "react-burger-menu"

const Burger = props => {
  return (
    <Menu {...props}>
      <nav>
        <Link activeClassName={active} to="/projects">
          Projects
        </Link>
        <Link activeClassName={active} to="/shop">
          Shop
        </Link>
        <Link activeClassName={active} to="/contact">
          Contact
        </Link>
      </nav>
    </Menu>
  )
}

export default Burger