import React from "react"
import Seo from "../seo"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"
import {
  container,
  img,
  item,
  alternate,
  stack,
  phrase,
} from "../../styles/projects.module.scss"

const Projects = ({ projectsList }) => {
  console.log(projectsList)
  return (
    <div className={container} id="projects">
      <Seo title="Projects" />
      {projectsList.map((project, key) => {
        console.log(key)
        return (
          <div className={key % 2 === 0 ? item : alternate}>
            <div className={img}>
              <Img
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                fluid={project.frontmatter.thumb.childImageSharp.fluid}
              />
            </div>
            <h1>{project.frontmatter.title}</h1>
            <div className={stack}>
              <p>{project.frontmatter.stack}</p>
            </div>
            <MediaQuery minWidth={900}>
              <p className={phrase}>{project.frontmatter.resume}</p>
            </MediaQuery>
          </div>
        )
      })}
    </div>
  )
}
export default Projects
