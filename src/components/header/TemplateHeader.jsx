import React from "react"
import { logo, navbar_template } from "./header.module.scss"
import "./components/burger.css"
import CloseButton from "../buttons/close"
import Logo from "../logo/Logo"

const TemplateHeader = () => {
  return (
    <div className={navbar_template}>
      <a href="/">
        <Logo />
      </a>
      <CloseButton />
    </div>
  )
}

export default TemplateHeader
