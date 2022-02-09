import React from "react"
import { Link } from "react-scroll"
import Burger from "./components/burger"
import MediaQuery from "react-responsive"
import { navbar, logo_container } from "./header.module.scss"
import "./components/burger.css"
// import Logo from "../logo/Logo"
import Navigation from "./components/nav/navigation"

const Header = ({
  pageWrapId,
  outerContainerId,
  setChangeMode,
}) => {

  const scrollToTop = (
    <Link
      to="intro"
      spy={true}
      smooth={true}
      offset={-40}
      duration={1000}
    >
      <div className={logo_container}>
        {/* <Logo /> */}
        Logo
      </div>
    </Link>
  )

  return (
    <header className={navbar}>
      <MediaQuery minWidth={870}>
        {scrollToTop}
        <Navigation/>
      </MediaQuery>
      <MediaQuery maxWidth={870}>
        {scrollToTop}
        <Burger
          setChangeMode={setChangeMode}
          pageWrapId={pageWrapId}
          outerContainerId={outerContainerId}
        />
      </MediaQuery>
    </header>
  )
}

export default Header
