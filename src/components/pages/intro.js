import React from "react"
import Seo from "../seo"
// import Fade from "react-reveal/Fade"
import { container } from "../../styles/intro.module.scss"

const Intro = () => {
  return (
    <div id="intro">
      <Seo title="Frontend" />
      <div className={container}>Intro</div>
    </div>
  )
}

export default Intro
