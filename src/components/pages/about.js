import * as React from "react"
import Seo from "../seo"
import { container } from "../../styles/about.module.scss"

const About = () => (
  <>
    <Seo title="About" />
    <div id="about" className={container}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
        totam obcaecati beatae adipisci hic animi <span>facilis voluptatum </span>  
         perspiciatis minima atque, praesentium, sint nemo, deserunt dolorem
        reiciendis id sunt voluptatibus?
      </p>
    </div>
  </>
)

export default About
