import React from "react"
import Seo from "../seo"
import Img from "gatsby-image"
import {
  container,
  img,
  item,
  alternate,
  stack,
  phrase,
} from "../../styles/projects.module.scss"

const Projects = ({ projectsList }) => {
  return (
    <div className={container} id="projects">
      <Seo title="Projects" />
      {projectsList.map((project, key) => {
        console.log(key)
        return (
          <div className={key%2 === 0 ? item : alternate}>
            <div className={img}>
              <Img
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                fluid={project.frontmatter.thumb.childImageSharp.fluid}
              />
            </div>
            <h1>{project.frontmatter.title}</h1>
            <p className={stack}>{project.frontmatter.stack}</p>
            <p className={phrase}>
              frase celebre para poner algo tu que sino la pantalla queda muy
              vacía yo que se.. en fin
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
