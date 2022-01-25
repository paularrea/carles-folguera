import React from "react"
import { logo, navbar } from "./header.module.scss"
import "./components/burger.css"
import CloseButton from "../buttons/close"

const TemplateHeader = () => {
  return (
    <div className={navbar}>
      <a href="/">    <h2 className={logo}>
          PAU
          <br />
          LARREA
        </h2></a>
      <CloseButton />
    </div>
  )
}

export default TemplateHeader
