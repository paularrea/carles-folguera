import React from "react"
import Seo from "../seo"
// import Fade from "react-reveal/Fade"
import { container } from "../../styles/intro.module.scss"
import Button from "../buttons/button"

const Intro = () => {
  return (
    <div id="intro">
      <Seo title="Frontend" />
      <div className={container}>
        <h1>Entrena lo invisible</h1>
        <h4>PARA QUE LO VISIBLE SEA INSUPERABLE</h4>
        <br />
        <Button to='contacto'>Descubre más</Button>
      </div>
    </div>
  )
}

export default Intro
