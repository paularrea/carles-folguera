import React from "react"
import { Link } from "react-scroll"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar } from "./header.module.scss"
import "./components/burger.css"
import Navigation from "./components/nav/navigation"
import Logo from "../utils/logo/Logo"

const Header = ({
  pageWrapId,
  outerContainerId,
  setChangeMode,
  currentLocale,
  handleChange,
}) => {
  const scrollToTop = (
    <Link to="intro" spy={true} smooth={true} offset={-40} duration={1000}>
      <Logo />
    </Link>
  )

  return (
    <header className={navbar}>
      <MediaQuery minWidth={900}>
        {scrollToTop}
        <Navigation currentLocale={currentLocale} handleChange={handleChange} />
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        {scrollToTop}
        <Burger
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
          currentLocale={currentLocale} handleChange={handleChange}
        />
      </MediaQuery>
    </header>
  )
}

export default Header
