import React from "react"
import MediaQuery from "react-responsive"
import logo from "../../images/icons/logo.png"
import favicon from "../../images/icons/favicon.png"
import darkFavi from "../../images/icons/favi-dark.png"
import darkLogo from "../../images/icons/logo-dark.png"
import { container, img } from "./logo.module.scss"

const Logo = ({changeMode}) => {
  return (
    <div className={container}>
      <MediaQuery maxWidth={870}>
        <div className={img}>
          <img
            src={changeMode === "dark" ? darkFavi : favicon}
            alt="Pau Larrea corporative logo"
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        <div className={img}>
          <img
            src={changeMode === "dark" ? darkLogo : logo}
            alt="Pau Larrea corporative logo"
          />
        </div>
      </MediaQuery>
    </div>
  )
}
export default Logo
