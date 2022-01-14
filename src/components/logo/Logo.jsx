import React from "react"
import logo from "../../images/icons/favicon.png"
import { container, img } from "./logo.module.scss"
const Logo = () => {
  return (
    <div className={container}>
      <div className={img}>
        <img src={logo} alt="Pau Larrea corporative logo" />
      </div>
      <h2>
        PAU
        <br />
        LARREA
      </h2>
    </div>
  )
}
export default Logo
