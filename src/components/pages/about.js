import * as React from "react"
import Seo from "../seo"
import { container } from "../../styles/about.module.scss"

const About = () => (
  <>
    <Seo title="About" />
    <div id="about" className={container}>
      <p>
        Hi I am Pau, a <span>frontend developer</span> passionate about building{" "}
        <span>beautiful</span> and intuitive <span>designs</span> that improves
        people's lives. While I'm not <span>coding</span> or pushing pixels,
        you'll find me surfing or traveling around.
      </p>
    </div>
  </>
)

export default About
