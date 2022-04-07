import React from "react"
import logo from "../../../images/icons/logo.png"
import { container, img } from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={container}>
        <div className={img}>
          <img
            src={logo}
            alt="Carles Folguera logo corporativo"
          />
        </div>
    </div>
  )
}
export default Logo
