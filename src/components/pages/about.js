import * as React from "react"
import Seo from "../seo"
import { container } from "../../styles/about.module.scss"

const About = () => (
  <>
    <Seo title="About" />
    <div id="about" className={container}>
      <h1>About</h1>
    </div>
  </>
)

export default About
