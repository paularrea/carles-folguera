import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar, transparent_navbar } from "./header.module.scss"
import "./components/burger.css"
import Navigation from "./components/nav/navigation"
import Logo from "../utils/logo/Logo"
import FadeIn from "../utils/animation/FadeIn"

const Header = ({
  pageWrapId,
  outerContainerId,
  currentLocale,
  handleChange,
}) => {
  const [colorChange, setColorchange] = useState(false)

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= window.innerHeight - 80) {
        setColorchange(true)
      } else {
        setColorchange(false)
      }
    }
    window.addEventListener("scroll", changeNavbarColor)
  }, [colorChange])

  const scrollToTop = (
    <Link to="intro" spy={true} smooth={true} offset={-40} duration={1000}>
      <FadeIn>
        <Logo />
      </FadeIn>
    </Link>
  )

  return (
    <header className={colorChange ? navbar : transparent_navbar}>
      <MediaQuery minWidth={900}>
        {scrollToTop}
        <Navigation currentLocale={currentLocale} handleChange={handleChange} />
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        {scrollToTop}
        <Burger
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
          currentLocale={currentLocale}
          handleChange={handleChange}
        />
      </MediaQuery>
    </header>
  )
}

export default Header
