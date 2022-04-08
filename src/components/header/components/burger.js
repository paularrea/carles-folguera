import React, { useState } from "react"
import { Link } from "react-scroll"
import { active } from "../header.module.scss"
import { slide as Menu } from "react-burger-menu"
import { menuList } from "../../utils/data/lists"
import { useIntl } from "react-intl"

const Burger = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale } = useIntl()

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
      {menuList.map(tab => {
        return (
          <Link
            activeClass={active}
            to={tab.page}
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
            onClick={closeMenu}
          >
            {tab.text[locale]}
          </Link>
        )
      })}
    </Menu>
  )
}

export default Burger
