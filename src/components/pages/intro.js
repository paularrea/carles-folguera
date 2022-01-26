import React from "react"
import { Link } from "react-scroll"
import Seo from "../seo"
import Fade from "react-reveal/Fade"
import {
  container,
  text,
  container_separator,
} from "../../styles/intro.module.scss"

const Intro = () => {
  return (
    <div id="intro">
      <Seo title="Frontend" />
      <div className={container}>
        <section className={container_separator}></section>
        <Fade>
          <section className={text}>
            <h1>
              Hello everyone!
              <br />
              I'm Pau, a{" "}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
              >
                <span>
                  {" "}
                  FRONTEND
                  <br />
                  DEVELOPER{" "}
                </span>
              </Link>
              based in
              <br />
              Barcelona.
            </h1>
          </section>
        </Fade>
      </div>
    </div>
  )
}

export default Intro
