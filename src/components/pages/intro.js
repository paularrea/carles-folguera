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
        {/* <section className={img_container}></section> */}
        <section className={container_separator}></section>
        <section className={text}>
          <h1>
            Hello everyone!
            <br />
            I'm Pau, a{" "}
            <span>
              {" "}
              FRONTEND
              <br />
              DEVELOPER{" "}
            </span>
            based in
            <br />
            Barcelona.
          </h1>
        </section>
      </div>
    </div>
  )
}

export default Intro
