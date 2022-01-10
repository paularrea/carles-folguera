import * as React from "react"
import Seo from "../seo"
import { container} from "../../styles/about.module.scss"

const About = () => (
  <div id="about">
    <Seo title="About" />
    <div className={container}>
      <h1>About</h1>
    </div>
  </div>
)

export default About
