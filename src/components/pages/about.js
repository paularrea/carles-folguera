import * as React from "react"
import Seo from "../seo"
import { container } from "../../styles/about.module.scss"
import SkillsComponent from "../skills/SkillsComponent"

const About = () => (
  <>
    <div id="about" className={container}>
      <p>
        Hi I am Pau, a <span>frontend developer</span> passionate about building{" "}
        <span>beautiful</span> and intuitive <span>designs</span> that improves
        people's lives. My journey as a <span>freelance</span> developer
        started 2 years ago, since then, I’ve done <span>remote</span> work for different agencies and startups <span>creating</span> web products
        for both business and consumer use. While I'm not <span>coding</span> or
        pushing pixels, you'll find me surfing or traveling around.
      </p>
      <SkillsComponent/>
    </div>
  </>
)

export default About
