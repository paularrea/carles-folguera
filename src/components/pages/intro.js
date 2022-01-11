import React from "react"
import { Link } from "react-scroll"
import Seo from "../seo"
import {
  container,
  img_container,
  text,
  container_separator,
} from "../../styles/intro.module.scss"

const Intro = () => {
  return (
    <div id="intro">
      <Seo title="Pau Larrea" />
      <div className={container}>
        <section className={img_container}></section>
        <section className={container_separator}></section>
        <section className={text}>
          <h1>
            Hello! I'm Pau, and I'm a FRONTEND DEVELOPER based in Barcelona.
          </h1>
        </section>
      </div>
    </div>
  )
}

export default Intro
